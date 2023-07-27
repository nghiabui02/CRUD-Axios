import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";
import {StudentPro} from "./student";

@Entity()
export class roomClass {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type:'varchar', length:255})
    headMaster: string;
    @Column({type:'int'})
    studentAmount: number;
    @OneToMany(()=> StudentPro,(StudentPro)=>StudentPro.roomClass)
    studentPro: StudentPro[]
}
