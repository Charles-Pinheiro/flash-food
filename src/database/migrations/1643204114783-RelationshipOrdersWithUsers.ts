import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class RelationshipOrdersWithUsers1643204114783
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "orders",
      new TableForeignKey({
        name: "OrdersFK",
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders", "OrdersFK");
  }
}
