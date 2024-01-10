import { MyDataClient } from "@main/MyDataClient";
import { beforeEach, describe, test } from "bun:test";

describe("RequestMyIncome", () => {

    let client: MyDataClient

    beforeEach(() => {
        client = new MyDataClient()
    })


    test("request with errors", async () => {
        await client.requestMyIncome("2023-01-01", "2024-01-01")
    })
})