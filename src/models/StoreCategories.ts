import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Store } from "./Stores";

@Entity("stor_category")
export class StoreCategories {
    @PrimaryColumn()
    store_category_id: string;

    @Column()
    name: string; 

};
