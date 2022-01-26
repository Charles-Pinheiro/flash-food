import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne
} from "typeorm";
import Users from "./Users";
import OrdersProducts from "./OrdersProducts";


@Entity("orders")
export default class Orders {
    @Column()
    productId: number;

    @Column()
    userId: number;

    @CreateDateColumn()
    data: Date;

    @Column()
    totalPrice: number;

    @ManyToOne(() => Users)
    @JoinColumn()
    users: Users;

    @ManyToOne(() => OrdersProducts)
    @JoinColumn()
    orderProducts: OrdersProducts;
}