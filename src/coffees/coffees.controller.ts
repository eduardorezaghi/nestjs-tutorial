import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get(':id')
  public findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Get('')
  public findAll() {
    return 'This action returns all coffees';
  }
}
