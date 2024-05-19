import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

describe('CoffeesController', () => {
  let controller: CoffeesController;
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [CoffeesService],
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
    service = module.get<CoffeesService>(CoffeesService);
  });

  describe('findOne', () => {
    it('should call coffeesService.findOne() with the specified id', () => {
      const id = '1';
      const findOneSpy = jest.spyOn(service, 'findOne');

      controller.findOne(id);

      expect(findOneSpy).toHaveBeenCalledWith(id);
    });
  });

  describe('findAll', () => {
    it('should call coffeesService.findAll()', () => {
      const findAllSpy = jest.spyOn(service, 'findAll');

      controller.findAll({});

      expect(findAllSpy).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should call coffeesService.create() with the provided body', () => {
      const body = { name: 'Test Coffee' };
      const createSpy = jest.spyOn(service, 'create');

      controller.create(body);

      expect(createSpy).toHaveBeenCalledWith(body);
    });
  });

  describe('update', () => {
    it('should call coffeesService.update() with the specified id and body', () => {
      const id = '1';
      const body = { name: 'Updated Coffee' };
      const updateSpy = jest.spyOn(service, 'update');

      controller.update(id, body);

      expect(updateSpy).toHaveBeenCalledWith(id, body);
    });
  });

  describe('remove', () => {
    it('should call coffeesService.remove() with the specified id', () => {
      const id = '1';
      const removeSpy = jest.spyOn(service, 'remove');

      controller.remove(id);

      expect(removeSpy).toHaveBeenCalledWith(id);
    });
  });
});