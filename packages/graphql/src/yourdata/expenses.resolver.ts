import { Args, Query, Resolver } from "@nestjs/graphql";
import * as models from "./models";
import { YourDataService } from "./yourdata.service";


@Resolver(of => models.RequestedBookInfo)
export class ExpensesResolver {

    constructor(
        private readonly client: YourDataService
    ) { }

    @Query(returns => [models.RequestedBookInfo])
    async expenses(
        @Args('from', { type: () => Date }) from: Date,
        @Args('to', { type: () => Date }) to: Date
    ): Promise<models.RequestedBookInfo[]> {
        return this.client.expenses(from, to)
    }

    @Query(returns => [models.RequestedBookInfo])
    async income(
        @Args('from', { type: () => Date }) from: Date,
        @Args('to', { type: () => Date }) to: Date
    ): Promise<models.RequestedBookInfo[]> {
        return this.client.income(from, to)
    }
}