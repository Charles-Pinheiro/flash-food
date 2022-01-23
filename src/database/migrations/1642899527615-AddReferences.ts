import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddReferences1642899527615 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "stores",
            new TableForeignKey({
                name: "AddressFK",
                columnNames: ["addressId"],
                referencedColumnNames: ["id"],
                referencedTableName: "address",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "stores",
            new TableForeignKey({
                name: "StoreCategoriesFK",
                columnNames: ["categoryId"],
                referencedColumnNames: ["id"],
                referencedTableName: "store_category",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "stores",
            new TableForeignKey({
                name: "UserFK",
                columnNames: ["userId"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("stores", "AddressFK");
        await queryRunner.dropForeignKey("stores", "StoreCategoriesFK");
        await queryRunner.dropForeignKey("stores", "UserFK");
    }
}
