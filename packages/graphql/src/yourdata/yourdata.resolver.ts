import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import * as models from "./models";
import { YourDataService } from "./yourdata.service";
import { InvoiceBuilder } from "@yourdata/sdk";
import { ResponseDoc } from "@yourdata/sdk/dist/types";


@Resolver(of => models.ResponseDocType)
export class YourDataResponseDocResolver {
    @ResolveField()
    async errs(@Parent() res: ResponseDoc) {
        if (res.errors?.error) {
            return res.errors.error
        } else {
            return []
        }
    }
}

@Resolver()
export class YourDataResolver {

    constructor(
        private readonly client: YourDataService
    ) { }

    @Query(returns => [models.RequestedBookInfo])
    async expenses(
        @Args('input', { type: () => models.RequestBookInfoInput }) input: models.RequestBookInfoInput,
    ): Promise<models.RequestedBookInfo[]> {
        return this.client.expenses(input)
    }

    @Query(returns => [models.RequestedBookInfo])
    async income(
        @Args('input', { type: () => models.RequestBookInfoInput }) input: models.RequestBookInfoInput,

    ): Promise<models.RequestedBookInfo[]> {
        return this.client.income(input)
    }

    @Mutation(returns => models.ResponseDocType)
    async sendInvoice(
        @Args('input', { type: () => models.InvoiceType }) input: models.InvoiceType
    ): Promise<models.ResponseDocType> {

        const builder = new InvoiceBuilder(this.client._client)

        builder.setHeader(input.invoiceHeader)

        if (input.issuer) builder.setIssuer(input.issuer)

        if (input.counterpart) builder.setCounterpart(input.counterpart)

        if (input.paymentMethod) builder.setPaymentMethod(input.paymentMethod)

        if (input.invoiceDetails.length) {
            input.invoiceDetails.map(item => builder.addItem({
                ...item,
                incomeClassification: item.income ? {
                    "icls:amount": item.income.amount,
                    "icls:classificationCategory": item.income.classificationCategory,
                    "icls:classificationType": item.income.classificationType,
                    id: item.income.id
                } : undefined,
            }))
        }

        if (input.invoiceSummary) builder.setSummary(input.invoiceSummary)
        else builder.calculateSummary()

        const responseDoc = await this.client.send(builder)
        console.log(JSON.stringify(responseDoc, null, 4))
        return responseDoc
    }
}