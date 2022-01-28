import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DbModule } from './db/db.module';
import { CultureFitModule } from './culture-fit/culture-fit.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CultureFit } from './db/entities/culture-fit.entity';
import { CapabilitiesModule } from './capabilities/capabilities.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ 
      debug: true, 
      playground: true,
      include: [CultureFitModule, AuthModule, CapabilitiesModule],
      autoSchemaFile: join(process.cwd(), 'src/gql/schema.gql')
    }),
    AuthModule,
    UsersModule,
    DbModule, 
    CultureFitModule,
    UsersModule,
    CapabilitiesModule
  ]
})
export class AppModule {}
