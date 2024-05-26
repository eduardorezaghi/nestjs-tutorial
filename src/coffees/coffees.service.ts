import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import type { ICoffeesService } from './coffees.service.d';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import Flavor from './entities/flavor.entity';

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
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
  ) {}

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorRepository.findOne({
      where: { name }
    });

    if (existingFlavor) return existingFlavor
    
    return this.flavorRepository.create({ name });
  }

  public async findAll() {
    return await this.coffeeRepository.find({
      relations: ['flavors']
    });
  }

  public async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({
      where: { id },
      // Eagerly load the flavors relation.
      // "join" the flavors relation to the coffee entity.
      relations: ['flavors']
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    
    return coffee;
  }

  public async create(createCoffeeDto: CreateCoffeeDto) {
    const flavors = await Promise.all(
      createCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))
    );

    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    return await this.coffeeRepository.save(coffee);
  }

  public async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const flavors =
      updateCoffeeDto.flavors &&
      (await Promise.all(
        updateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))
      ));

    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
      flavors,
    });

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return await this.coffeeRepository.save(coffee);
  }

  public async remove(id: string) {
    const coffee = await this.findOne(+id);
    return await this.coffeeRepository.remove(coffee);
  }
}

export { CoffeesService };