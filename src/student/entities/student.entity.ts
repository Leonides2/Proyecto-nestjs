import { Course } from "src/course/entities/course.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
export class Student {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    lastName : string
    @Column()
    Grado: string

    @ManyToMany(()=> Course, (course) => course.students)
    @JoinTable()
    courses : Course[]
}
