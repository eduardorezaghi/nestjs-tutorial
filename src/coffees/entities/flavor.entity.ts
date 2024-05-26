import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from "./coffee.entity";

@Entity('flavors')
class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // One flavor can be applied to many coffees.
  @ManyToMany(_type => Coffee, coffee => coffee.flavors)
  coffees: Coffee[];
}


export default Flavor;