
import { Student } from "src/student/entities/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name: string

    @ManyToMany(()=> Student, (student) => student.courses)
    students: Student[]
}
