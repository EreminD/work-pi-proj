import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DbModule } from './db/db.module';
import { CultureFitModule } from './culture-fit/culture-fit.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CapabilitiesModule } from './capabilities/capabilities.module';
import { TeambuldingModule } from './teambuilding/teambuilding.module';


@Module({
  imports: [
    GraphQLModule.forRoot({ 
      debug: true, 
      playground: true,
      include: [CultureFitModule, AuthModule, CapabilitiesModule, TeambuldingModule],
      autoSchemaFile: join(process.cwd(), 'src/gql/schema.gql')
    }),
    AuthModule,
    UsersModule,
    DbModule, 
    CultureFitModule,
    CapabilitiesModule,
    TeambuldingModule
  ]
})
export class AppModule {}
