import { Entity, PrimaryColumn, Column, ManyToOne, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import Address from "./Address";
import StoreCategories from "./StoreCategories";
import User from "./Users";

@Entity("stores")
export class Store {
    @PrimaryGeneratedColumn("uuid")
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
    storeCategories?: StoreCategories;

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(type => User)
    user: User;

};
