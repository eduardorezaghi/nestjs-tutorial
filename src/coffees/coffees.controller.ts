import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

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
    this.coffeesService.findOne(id);
  }

  @Get('')
  public findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return this.coffeesService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
