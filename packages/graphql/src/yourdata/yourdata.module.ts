import { Module } from '@nestjs/common';
import { YourDataResolver, YourDataResponseDocResolver } from './yourdata.resolver';
import { YourDataService } from './yourdata.service';

@Module({
  providers: [YourDataResolver, YourDataResponseDocResolver, YourDataService],
})
export class YourDataModule {}