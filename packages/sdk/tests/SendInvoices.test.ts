import { test, expect, beforeEach, describe } from "bun:test"
import { InvoiceTypeXMLDocumentObject, parseXML, serializeInvoiceType } from "@helpers/xml"

import { InvoiceBuilder, MyDataClient } from "@main"

import { CountryCode, IncomeClassificationCategoryEnumType, IncomeClassificationEnumType, InvoiceType, PaymentMethodEnumType, VatExemptionCategoryEnumType } from "@types"
import { readXMLInvoiceTypeDocument } from "./data/helpers"

describe("SendInvoices", () => {

    let client: MyDataClient

    beforeEach(() => {
        client = new MyDataClient()
    })

    test("basic XML serialization", () => {

        const invoice = client.initInvoiceBuilder()

        invoice
            .setIssuer({
                branch: 1,
                country: invoice.COUNTRY.Greece,
                vatNumber: "794096631",
            })
            .setCounterpart({
                branch: 1,
                country: invoice.COUNTRY.Germany,
                vatNumber: "DE999999999",
                address: {
                    city: "Cologne",
                    postalCode: "57123"
                }
            })

        const expectedDoc = readXMLInvoiceTypeDocument('./simple.expected.invoice.xml')

        expect(invoice.data).toStrictEqual(expectedDoc.InvoicesDoc.invoice as Partial<InvoiceType>)
    })

    describe("InvoiceSupplyIntraCommunityServices: 2.2", () => {

        let invoice: InvoiceBuilder

        beforeEach(() => {
            invoice = client.initInvoiceBuilder()

            invoice
                .setHeader({
                    series: "A",
                    aa: "0004",
                    invoiceType: invoice.TYPE.InvoiceSupplyIntraCommunityServices,
                    issueDate: new Date("2020-04-08"),
                    currency: invoice.CURRENCY.EUR,
                })
                .setIssuer({
                    branch: 1,
                    country: invoice.COUNTRY.Greece,
                    vatNumber: "794096631",
                })
                .setCounterpart({
                    branch: 1,
                    country: invoice.COUNTRY.Germany,
                    vatNumber: "DE999999999",
                    address: {
                        city: "Cologne",
                        postalCode: "57123"
                    },
                    name: "Webrunners GmbH"
                })
                .addItem({
                    netValue: 100,
                    vatAmount: 0,
                    vatCategory: invoice.VAT_CATEGORY.VatExempt,
                    vatExemptionCategory: VatExemptionCategoryEnumType.WithoutvatArticle14,
                    incomeClassification: {
                        "icls:amount": 100,
                        "icls:classificationType": IncomeClassificationEnumType.IntraCommunityExternalSales,
                        "icls:classificationCategory": IncomeClassificationCategoryEnumType.RevenuesFromServices,
                    }
                })
                .calculateSummary()
        })

        test("match expected XML output", () => {
            const expectedDoc = readXMLInvoiceTypeDocument("./2_2.expected.invoice.xml") as InvoiceTypeXMLDocumentObject
            const inv = expectedDoc.InvoicesDoc.invoice as InvoiceType

            expect(invoice.data.invoiceSummary).toStrictEqual(inv.invoiceSummary!)
            expect(invoice.data.invoiceDetails).toStrictEqual(inv.invoiceDetails!)
            expect(invoice.data).toStrictEqual(inv)
        })


        test("invoke testing system", async () => {
            invoice.setIssuer({
                branch: 1,
                country: CountryCode.Greece,
                vatNumber: "802209548"
            })
            invoice.setPaymentMethod({
                amount: 100,
                type: PaymentMethodEnumType.WebBanking,
            })
            const xml = serializeInvoiceType(invoice.data)
            const response = await client.sendXML(xml, "SendInvoices")

            expect(Array.isArray(response.ResponseDoc.response)).toBeFalse
            
            if(Array.isArray(response.ResponseDoc.response) === false) {
                expect((response.ResponseDoc.response).qrUrl).toBeString
                expect((response.ResponseDoc.response).statusCode).toEqual("Success")
            }
        })
    })
})
