import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BarangsModule } from './barangs/barangs.module';
import { Barang } from './barangs/entities/barang.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Barang],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    
    BarangsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
