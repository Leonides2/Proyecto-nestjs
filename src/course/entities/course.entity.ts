import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name: string
    @ManyToMany(() => Student)
    @JoinTable()
    student : Student[]

}
