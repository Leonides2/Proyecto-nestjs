import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class Book {

    @PrimaryGeneratedColumn()
    id :number;
    @Column()
    nombre:string;
    @Column()
    autor:string;
}
