import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ){}
  create(createStudentDto: CreateStudentDto) {
    var addeedStudent = this.studentRepository.create(createStudentDto)
    this.studentRepository.save(addeedStudent);
    return addeedStudent;
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOneBy({id});
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    var updateStudent = await this.studentRepository.update({id}, updateStudentDto) 
    return updateStudent;
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
