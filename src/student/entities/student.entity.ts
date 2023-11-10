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

    @ManyToMany(()=> Course)
    @JoinTable()
    courses : Course[]
}
