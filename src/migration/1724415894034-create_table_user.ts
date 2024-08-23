import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1724415894034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
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
                name: 'email',
                type: 'varchar',
                length: '100',
                isUnique: true
            },{
                name: 'password',
                type: 'varchar',
                length: '100',
            },{
                name: 'phone',
                type: 'varchar',
                length: '100',
                isNullable: true
            },{
                name: 'cpf',
                type: 'varchar',
                length: '100',
            },{
                name: 'type_user',
                type: 'int',
                default: '1'
            },{
                name: 'created_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                isNullable: true
            },{
                name: 'updated_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                isNullable: true
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            drop table user
        `)
    }

}
