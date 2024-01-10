import { orderObject } from "../helpers/obj";
import type { IncomeClassificationType, InvoiceRowType, InvoiceSummaryType, InvoiceType } from "../types";

export class InvoiceSummaryBuilder {

    items: InvoiceRowType[] = []

    constructor(private readonly data: Partial<InvoiceType>) { }

    add(item: InvoiceRowType) {
        this.items.push(item)
        return this
    }


    get groups() {
        return this.items
            .filter(item => !!item.incomeClassification)
            .reduce((group, item) => {

                if (!item.incomeClassification || !item.incomeClassification["icls:classificationCategory"]) return group

                const name = `${item.incomeClassification["icls:classificationType"] || "unset"}_${item.incomeClassification["icls:classificationCategory"]}`
                const items = group.get(name)

                if (items?.length) {
                    group.set(name, [...items, item])
                } else {
                    group.set(name, [item])
                }

                return group
            }, new Map<string, InvoiceRowType[]>())
    }

    buildClassifications(): IncomeClassificationType[] {
        const groups = this.groups

        return Array.from(groups.values()).map(items => {

            const [firstItem] = items
            const amount = items
                .reduce((value, item) => value + (item.incomeClassification?.["icls:amount"] || 0), 0)

            return {
                "icls:classificationCategory": firstItem.incomeClassification!["icls:classificationCategory"],
                "icls:classificationType": firstItem.incomeClassification?.["icls:classificationType"],
                "icls:amount": amount,
            }
        })
    }

    build(): InvoiceSummaryType {

        const totalNetValue = this.items.reduce((value, item) => {
            return value + item.netValue
        }, 0)


        const totalVatAmount = this.items.reduce((value, item) => {
            return value + item.vatAmount
        }, 0)


        const totalGrossValue = this.items.reduce((value, item) => {
            return value + item.vatAmount + item.netValue
        }, 0)

        const totalFeesAmount = this.items.reduce((value, item) => {
            return value + (item.feesAmount || 0)
        }, 0)

        const totalOtherTaxesAmount = this.items.reduce((value, item) => {
            return value + (item.otherTaxesAmount || 0)
        }, 0)

        const incomeClassification = this.buildClassifications().map(item => orderObject([
            ["icls:classificationType"],
            ["icls:classificationCategory"],
            ["icls:amount"],
        ], item))

        return {
            totalNetValue,
            totalVatAmount,
            totalGrossValue,
            totalDeductionsAmount: 0,
            totalFeesAmount,
            totalOtherTaxesAmount,
            totalStampDutyAmount: 0,
            totalWithheldAmount: 0,
            incomeClassification
        }
    }
}