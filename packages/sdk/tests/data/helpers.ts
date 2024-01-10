import { readFileSync } from "fs"
import { InvoiceTypeXMLDocumentObject, parseXML } from "@helpers/xml";

export function readXMLInvoiceTypeDocument(pathname: string): InvoiceTypeXMLDocumentObject {
    const xml = readFileSync(require.resolve(pathname)).toString("utf-8")

    return parseXML(xml) as InvoiceTypeXMLDocumentObject
}