import { Coffee } from './entities/coffee.entity';


/**
 * Interface representing the CoffeesService class.
 */
export class ICoffeesService {

  /**
   * Retrieves all coffees.
   * @returns An array of Coffee objects.
   */
  public async findAll(): Promise<Coffee[]>;
  /**
   * Retrieves a coffee by its ID.
   * @param id - The ID of the coffee.
   * @returns The Coffee object with the specified ID, or undefined if not found.
   */
  public async findOne(id: number): Promise<Coffee> | undefined;

  /**
   * Creates a new coffee.
   * @param createCoffeeDto - The data for creating the coffee.
   * @returns The created Coffee object.
   */
  public async create(createCoffeeDto: any): Promise<Coffee>;

  /**
   * Updates a coffee by its ID.
   * @param id - The ID of the coffee to update.
   * @param updateCoffeeDto - The data for updating the coffee.
   */
  public async update(id: string, updateCoffeeDto: any): void;

  /**
   * Removes a coffee by its ID.
   * @param id - The ID of the coffee to remove.
   */
  public async remove(id: string): void;
}
