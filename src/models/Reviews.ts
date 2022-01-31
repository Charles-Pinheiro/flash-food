import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Exclude } from "class-transformer";
import User from "./Users"
import Store from "./Stores"

@Entity("reviews")
export default class Review {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    stars: number;

    @Column()
    review: string;

    @Column()
    userId: string;

    @Column()
    storeId: string;
    
    @Exclude()
    @ManyToOne(type => User)
    user: User;

    @Exclude()
    @ManyToOne(type => Store)
    store: Store;
}