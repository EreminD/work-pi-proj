import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DbModule } from './db/db.module';
import { CultureFitModule } from './culture-fit/culture-fit.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CultureFit } from './db/entities/culture-fit.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({ 
      debug: true, 
      playground: true,
      include: [CultureFitModule, AuthModule],
      autoSchemaFile: join(process.cwd(), 'src/gql/schema.gql')
    }),
    AuthModule,
    UsersModule,
    DbModule, 
    CultureFitModule,
    UsersModule
  ]
})
export class AppModule {}
