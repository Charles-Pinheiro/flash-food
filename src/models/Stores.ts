import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, ManyToOne, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import Address from "./Address";
import StoreCategories from "./StoreCategories";
import User from "./Users";

@Entity("stores")
export default class Store {
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

    @Exclude()
    @ManyToOne(type => StoreCategories)
    storeCategories?: StoreCategories;

    @OneToOne(type => Address, {eager: true})
    @JoinColumn()
    address: Address;

    @Exclude()
    @ManyToOne(type => User)
    user: User;

};
