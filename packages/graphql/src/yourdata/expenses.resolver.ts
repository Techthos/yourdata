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
}