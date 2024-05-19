import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';

describe('CoffeesController', () => {
  let controller: CoffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
  });

  describe('findOne', () => {
    it('should return the coffee with the specified id', () => {
      const id = '1';
      const result = controller.findOne(id);
      expect(result).toBe(`This action returns #${id} coffee`);
    });
  });

  describe('findAll', () => {
    it('should return all coffees', () => {
      const result = controller.findAll();
      expect(result).toBe('This action returns all coffees');
    });
  });

  describe('create', () => {
    it('should create a new coffee', () => {
      const body = { name: 'Test Coffee' };
      const result = controller.create(body);
      expect(result).toEqual(body);
    });
  });

  describe('update', () => {
    it('should update the coffee with the specified id', () => {
      const id = '1';
      const body = { name: 'Updated Coffee' };
      const result = controller.update(id, body);
      expect(result).toBe(`This action updates #${id} coffee`);
    });
  });

  describe('remove', () => {
    it('should remove the coffee with the specified id', () => {
      const id = '1';
      const result = controller.remove(id);
      expect(result).toBe(`This action removes #${id} coffee`);
    });
  });
});
