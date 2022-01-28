import { forwardRef, Module } from '@nestjs/common';
import { CultureFitService } from './culture-fit.service';
import { CultureFitResolver } from './culture-fit.resolver';
import { CultureFit } from 'src/db/entities/culture-fit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';


@Module({
  providers: [CultureFitResolver, CultureFitService],
  imports: [ TypeOrmModule.forFeature([CultureFit]), AuthModule]
})
export class CultureFitModule {}
