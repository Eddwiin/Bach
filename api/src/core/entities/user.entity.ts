import { Column, Model, Table, PrimaryKey, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class UserEntity extends Model {
  @PrimaryKey
  id: string;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  @Unique
  email: string;
  @Column
  password: string;
  @Column
  createAt: Date;
  @Column
  updatedAt: Date;
}
