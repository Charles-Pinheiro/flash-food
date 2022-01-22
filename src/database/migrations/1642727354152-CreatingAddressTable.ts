import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatingAddressTable1642727354152 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "street",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "district",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "number",
            type: "integer",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "state",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cep",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "coordinate",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
  }
}
