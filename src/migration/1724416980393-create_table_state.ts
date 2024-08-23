import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableState1724416980393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "state",
            columns: [{
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                unsigned: true
            },{
                name: 'name',
                type: 'varchar',
                length: '100'
            },{
                name: 'createdAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                isNullable: true
                
            },{
                name: 'updatedAt',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                isNullable: true
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table state
        `)
    }

}
