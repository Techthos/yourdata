import { Command, Option } from "commander";
import { bootstrap } from "./bootstrap";
import { readFileSync } from 'fs';
import { AADE_ENVIRONMENTS_KEYS } from "@yourdata/sdk/dist/main/config";
export { bootstrap } from "./bootstrap";
import { pickPort } from "pick-port"

const program = new Command()

program.name("yourdata")
    .version("0.0.1")


program.command("bootstrap")
.option('--address <address>', 'Address in which the server will be binded', '127.0.0.1')
.option('--port <port>', 'Port in which the server will be binded', "3000")
    .action(async (options: {address: string, port: string}) => {
        const app = await bootstrap(options.address, parseInt(options.port))

        console.log("Server running at", `${await app.getUrl()}/graphiql`)
    })

program.command("execute")
    .argument('<file>', 'Graphql file which will be executed')
    .argument('<username>', '"aade-user-id"')
    .argument('<subscriptionKey>', '"ocp-apim-subscription-key"')

    .addOption(new Option('--env <env>').choices([AADE_ENVIRONMENTS_KEYS.PROD, AADE_ENVIRONMENTS_KEYS.TEST]).default(AADE_ENVIRONMENTS_KEYS.PROD))
    .option('--variables <variablesJSON>', 'JSON serialized string used as variables in the graphql execution')
    .action(async (file: string, username: string, subscriptionKey: string, options: {env: AADE_ENVIRONMENTS_KEYS, variables: string}) => {
        const app = await bootstrap("127.0.0.1", await pickPort({type: "tcp"}))
        const data = readFileSync(file, 'utf-8')

        const response = await fetch(`${await app.getUrl()}/graphql`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "username": username,
                "subscriptionKey": subscriptionKey,
                "environment": options.env
            },
            body: JSON.stringify({
                query: data,
                variables: JSON.parse(options.variables || "{}")
            })
        })

        console.log(JSON.stringify(await response.json(), null, 4))

        await app.close()
    })

program.parse()