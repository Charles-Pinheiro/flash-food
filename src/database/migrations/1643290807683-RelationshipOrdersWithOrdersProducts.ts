import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class RelationshipOrdersWithOrdersProducts1643290807683
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "orders",
      new TableForeignKey({
        name: "OrdersWithOrdersProductsFK",
        columnNames: ["ordersProductsId"],
        referencedColumnNames: ["orderProductsId"],
        referencedTableName: "orders_products",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders", "OrdersWithOrdersProductsFK");
  }
}
