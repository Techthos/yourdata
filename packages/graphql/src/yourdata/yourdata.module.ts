import { Module } from '@nestjs/common';
import { ExpensesResolver } from './expenses.resolver';
import { YourDataService } from './yourdata.service';

@Module({
  providers: [ExpensesResolver, YourDataService],
})
export class YourDataModule {}