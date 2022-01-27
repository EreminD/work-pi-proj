import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { Capabilities } from './db/entity/capabilities.entity';
import { CapabilitiesModule } from './capabilities/capabilities.module';
import { CultureFitModule } from './culture-fit/culture-fit.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    DbModule, 
    TypeOrmModule.forFeature([Capabilities]), 
    CapabilitiesModule, 
    CultureFitModule,
    GraphQLModule.forRoot({ 
      debug: true, 
      playground: true,
      //plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [CultureFitModule],
      autoSchemaFile: join(process.cwd(), 'src/gql/schema.gql'),
    }),
  ]
})
export class AppModule {}
