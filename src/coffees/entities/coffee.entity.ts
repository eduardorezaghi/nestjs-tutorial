import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('coffees')
class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { default: 0, nullable: true })
  flavors?: string[];
}

export { Coffee };