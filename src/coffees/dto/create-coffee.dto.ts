
// What is a Data Transfer Object (DTO)?
// A Data Transfer Object (DTO) is an object that carries data between processes.
// In our case, the CreateCoffeeDto is a class that carries data between the client and the server.
// It is used to define the shape of the data that will be sent to the server when creating a new coffee.

import { IsString } from "class-validator";

// This is the expected shape of the data that we want to receive when creating a new coffee.
export class CreateCoffeeDto {
   // IMMUTABILIY: We use the readonly keyword to make sure
   // that the properties of the class cannot be changed after the object is created.

  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true }) // each: true means that each item in the array should be a string
  readonly flavors: string[];
}
