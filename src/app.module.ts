import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BooksModule, TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'soporte',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
