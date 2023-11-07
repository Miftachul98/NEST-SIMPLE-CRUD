import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarangsService } from './barangs.service';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';

@Controller('barangs')
export class BarangsController {
  constructor(private readonly barangsService: BarangsService) {}

  @Post()
  create(@Body() createBarangDto: CreateBarangDto) {
    return this.barangsService.createBarang(createBarangDto);
  }

  @Get()
  findAll() {
    return this.barangsService.findAllBarang();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barangsService.findOneBarang(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarangDto: UpdateBarangDto) {
    return this.barangsService.updateBarang(+id, updateBarangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barangsService.removeBarang(+id);
  }
}
