import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("stor_category")
export class StoreCategories {
    @PrimaryColumn()
    store_category_id: string;

    @Column()
    name: string; 

};
