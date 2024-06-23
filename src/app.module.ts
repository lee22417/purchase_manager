import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        // console.log('DB_PASSWORD:', configService.get<string>('DB_HOST'));
        return {
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [join(__dirname, 'entities', '*.entity.{ts,js}')],
          synchronize: false,
        };
      },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
