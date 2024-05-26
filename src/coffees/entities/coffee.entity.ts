import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Flavor from "./flavor.entity";

@Entity('coffees')
class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;


  // This relation can be expressed by the phrase bellow:
  // - A coffee can have many flavors, and a flavor can be applied to many coffees.

  // `coffees_flavors` will be the join table name.
  // - A join table is a table that maps the relationship between two other tables.
  @JoinTable({ name: 'coffees_flavors' })
  // ManyToMany expresses the relationship between the Coffee and Flavor entities.
  @ManyToMany(_type => Flavor, flavor => flavor.coffees, {
    cascade: true, // ['insert']
  })
  flavors?: string[];
}

export { Coffee };