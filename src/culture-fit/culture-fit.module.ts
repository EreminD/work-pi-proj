import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultureFitService } from './culture-fit.service';
import { CultureFitResolver } from './culture-fit.resolver';
import { CultureFit } from 'src/db/entities/culture-fit.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  providers: [CultureFitResolver, CultureFitService],
  imports: [ TypeOrmModule.forFeature([CultureFit]), AuthModule]
})
export class CultureFitModule {}
