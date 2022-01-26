import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class RelationshipOdersProducts1643208340505
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "orders_products",
      new TableForeignKey({
        name: "OrdersFK",
        columnNames: ["ordersId"],
        referencedColumnNames: ["ordersId"],
        referencedTableName: "orders",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "orders_products",
      new TableForeignKey({
        name: "ProductsFK",
        columnNames: ["productsId"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders_products", "OrdersFK");
    await queryRunner.dropForeignKey("orders_products", "ProductsFK");
  }
}
