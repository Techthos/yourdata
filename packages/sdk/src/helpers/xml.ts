import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { InvoiceType } from "../types";


const DEFAULT_XML_ATTR = {
    "attr:xmlns": "http://www.aade.gr/myDATA/invoice/v1.0",
    "attr:xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "attr:xmlns:icls": "https://www.aade.gr/myDATA/incomeClassificaton/v1.0",
    "attr:xmlns:ecls": "https://www.aade.gr/myDATA/expensesClassificaton/v1.0",
    "attr:xsi:schemaLocation": "http://www.aade.gr/myDATA/invoice/v1.0/InvoicesDoc-v0.6.xsd",
}


export type InvoiceTypeXMLDocumentObject = {
    InvoicesDoc: {
        invoice: Partial<InvoiceType>[] | Partial<InvoiceType>
    }
}

export function serializeInvoiceType(invoiceType: Partial<InvoiceType>): string {
    let xmlObject = {
        "?xml": {
            'attr:version': "1.0",
            'attr:encoding': 'utf-8'
        },
        InvoicesDoc: {
            ...DEFAULT_XML_ATTR,
            invoice: [
                invoiceType
            ]
        }
    }

    const builder = new XMLBuilder({
        format: true,
        ignoreAttributes: false,
        attributeNamePrefix: "attr:"
    })

    return builder.build(xmlObject)
}


const ARRAY_TAGS_JPATHS = [
    "InvoicesDoc.invoice.invoiceDetails",
    "InvoicesDoc.invoice.invoiceSummary.incomeClassification",
    "InvoicesDoc.invoice.invoiceSummary.expensesClassification",
    "RequestedBookInfo.bookInfo",
    "ResponseDoc.response.errors.error"
]

const STRING_TYPES = [
    "InvoicesDoc.invoice.invoiceHeader.invoiceType",
    "InvoicesDoc.invoice.invoiceHeader.aa",
    "InvoicesDoc.invoice.counterpart.address.postalCode",
    "InvoicesDoc.invoice.counterpart.vatNumber",
    "InvoicesDoc.invoice.issuer.vatNumber",
    "RequestedBookInfo.bookInfo.invType"
]

export function parseXML(xml: string): unknown {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "attr:",
        numberParseOptions: {
            leadingZeros: false,
            hex: false,
            eNotation: false,
        },
        parseTagValue: false,
        tagValueProcessor(tagName, tagValue, jPath, hasAttributes, isLeafNode) {
            if (STRING_TYPES.indexOf(jPath) !== -1) {
                return String(tagValue)
            }

            if (Number.isNaN(+tagValue) === false) {
                return parseFloat(tagValue)
            }

            return tagValue
        },
        isArray(tagName, jPath, isLeafNode, isAttribute) {
            if (ARRAY_TAGS_JPATHS.indexOf(jPath) !== -1) {
                return true
            }
            return false
        },
    })

    return parser.parse(xml)
}