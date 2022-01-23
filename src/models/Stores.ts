import { Entity, PrimaryColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import Address from "./Address";
import { StoreCategories } from "./StoreCategories";
import User from "./Users";

@Entity("stors")
export class Store {
    @PrimaryColumn()
    store_id: string;

    @Column()
    name: string;

    @Column()
    categoryId: string;

    @Column()
    addressId: string;

    @Column()
    userId: string;

    @ManyToOne(type => StoreCategories)
    storeCategories: StoreCategories

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(type => User)
    user: User;

};
