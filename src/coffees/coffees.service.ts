import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import type { ICoffeesService } from './coffees.service.d';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

// This decorator defines that the class is a provider.
// That means, in the dependency injection system, it can inject dependencies.
// Providers are a fundamental concept in Nest.
@Injectable()
class CoffeesService implements ICoffeesService {
  // "Injects" the Coffee entity repository into the service, which effectively means:
  // - The repository is now available in the CoffeesService class.
  // - The repository will handle all CRUD operations for the Coffee entity.
  // - The repository is a TypeORM Repository instance.
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  public async findAll() {
    return await this.coffeeRepository.find();
  }

  public async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOneBy({
      id: +id
    })
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    
    return coffee;
  }

  public async create(createCoffeeDto: CreateCoffeeDto) {
    this.coffeeRepository.create(createCoffeeDto);
    return await this.coffeeRepository.save(createCoffeeDto);
  }

  public async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    })
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return await this.coffeeRepository.save(existingCoffee);
  }

  public async remove(id: string) {
    const coffee = await this.findOne(id);
    return await this.coffeeRepository.remove(coffee);
  }
}

export { CoffeesService };