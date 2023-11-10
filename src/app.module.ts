import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { Student } from './student/entities/student.entity';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestproject',
    entities:[Course, Student],
    autoLoadEntities: true,
    synchronize: true
  }), StudentModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
