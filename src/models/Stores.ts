import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { StoreCategories } from "./StoreCategories";

@Entity("stors")
export class Store {
    @PrimaryColumn()
    store_id: string;

    @Column()
    name: string;

};
