import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("store_category")
export default class StoreCategories {
    @PrimaryGeneratedColumn("uuid")
    store_category_id: string;

    @Column()
    name: string; 

};
