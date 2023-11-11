import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ){}

  create(createCourseDto: CreateCourseDto) {
    var addeedCourse = this.courseRepository.create(createCourseDto)
    this.courseRepository.save(addeedCourse);
    return addeedCourse;
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy({id});
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    var updateCourse = await this.courseRepository.update({id}, updateCourseDto) 
    return updateCourse;
  }

  remove(id: number) {
    return this.courseRepository.delete({id});
  }
}
