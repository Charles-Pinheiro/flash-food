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

    @Exclude()
    @Column()
    categoryId: string;

    @Exclude()
    @Column()
    addressId: string;

    @Exclude()
    @Column()
    userId: string;

    @ManyToOne(() => StoreCategories)
    @JoinColumn()
    storeCategories: StoreCategories;

    @OneToOne(() => Address, {eager: true})
    @JoinColumn()
    address: Address;

    @Exclude()
    @ManyToOne(() => User)
    user: User;

};
