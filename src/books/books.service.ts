import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
  ){}

  create(createBookDto: CreateBookDto) {
    var addeedBook = this.bookRepository.create(createBookDto)
    this.bookRepository.save(addeedBook);
    return addeedBook;
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({id});
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    var updatedBook = await this.bookRepository.update({id},updateBookDto);
    return updatedBook;
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
