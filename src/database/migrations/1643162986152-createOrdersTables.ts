import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrdersTables1643162986152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

            await queryRunner.createTable(
                new Table({
                    name: "orders",
                    columns: [
                        {
                            name: "orderId",
                            type: "uuid",
                            isPrimary: true,
                            generationStrategy: "uuid",
                            default: "uuid_generate_v4()",
                        },
                        {
                            name: "productId",
                            type: "uuid",
                        },
                        {
                            name: "userId",
                            type: "uuid",
                        },
                        {
                            name: "data",
                            type: "timestamp",
                            default: "now()",
                            isNullable: false,
                        },
                        {
                            name: "totalPrice",
                            type: "decimal",
                            precision: 5,
                            scale: 2,
                            isNullable: false,
                        },
                    ]
                })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("orders")

    }

}
