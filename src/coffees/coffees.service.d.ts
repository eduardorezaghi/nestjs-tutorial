import { Coffee } from './entities/coffee.entity';


/**
 * Interface representing the CoffeesService class.
 */
export class ICoffeesService {

  /**
   * Retrieves all coffees.
   * @returns An array of Coffee objects.
   */
  public findAll(): Coffee[];

  /**
   * Retrieves a coffee by its ID.
   * @param id - The ID of the coffee.
   * @returns The Coffee object with the specified ID, or undefined if not found.
   */
  public findOne(id: string): Coffee | undefined;

  /**
   * Creates a new coffee.
   * @param createCoffeeDto - The data for creating the coffee.
   * @returns The created Coffee object.
   */
  public create(createCoffeeDto: any): Coffee;

  /**
   * Updates a coffee by its ID.
   * @param id - The ID of the coffee to update.
   * @param updateCoffeeDto - The data for updating the coffee.
   */
  public update(id: string, updateCoffeeDto: any): void;

  /**
   * Removes a coffee by its ID.
   * @param id - The ID of the coffee to remove.
   */
  public remove(id: string): void;
}
