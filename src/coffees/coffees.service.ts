import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import type { ICoffeesService } from './coffees.service.d';

// This decorator defines that the class is a provider.
// That means, in the dependency injection system, it can inject dependencies.
// Providers are a fundamental concept in Nest.
@Injectable()
class CoffeesService implements ICoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: "Bristot",
      brand: "Bristot",
      flavors: ["chocolate", "caramel"],
    },
  ];

  public findAll() {
    return this.coffees;
  }

  public findOne(id: string) {
    const coffee =  this.coffees.find(item => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    
    return coffee;
  }

  public create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  public update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  public remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}

export { CoffeesService };