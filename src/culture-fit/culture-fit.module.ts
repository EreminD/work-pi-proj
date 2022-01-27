import { Module } from '@nestjs/common';
import { CultureFitService } from './culture-fit.service';
import { CultureFitResolver } from './culture-fit.resolver';
import { CultureFit } from 'src/db/entity/culture-fit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CultureFitResolver, CultureFitService],
  imports: [ TypeOrmModule.forFeature([CultureFit])]
})
export class CultureFitModule {}
