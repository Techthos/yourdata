import { bootstrap } from "./bootstrap";


const { HOST = "127.0.0.1", PORT = "3000" } = process.env

bootstrap(HOST, parseInt(PORT)).then(async (app) => {
    const url = await app.getUrl()
    console.log(`Running at: ${url}`)
})