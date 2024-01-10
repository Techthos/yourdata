import { MyDataClient } from "@main/MyDataClient";
import { beforeEach, describe, test } from "bun:test";

describe("RequestMyExpenses", () => {

    let client: MyDataClient

    beforeEach(() => {
        client = new MyDataClient()
    })

    test("request with errors", async () => {
        await client.requestMyExpenses("2023-01-01", "2024-01-01")
    })
})