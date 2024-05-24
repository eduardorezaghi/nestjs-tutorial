import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(
    // Inject the CoffeesService here, making it available in the whole class
    private readonly coffeesService: CoffeesService,
  ) {
    this.coffeesService = coffeesService;
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Get('')
  public findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return this.coffeesService.findAll();
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
