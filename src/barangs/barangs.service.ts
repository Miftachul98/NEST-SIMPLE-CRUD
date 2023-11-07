import { Injectable } from '@nestjs/common';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Barang } from './entities/barang.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BarangsService {
  constructor(@InjectRepository(Barang) private readonly barangRepo: Repository<Barang>) {}

  async createBarang(createBarangDto: CreateBarangDto) {
    const barang = this.barangRepo.create(createBarangDto);

    return await this.barangRepo.save(barang);
  }

  findAllBarang(): Promise<Barang[]> {
    return this.barangRepo.find();
  }

  findOneBarang(id: number): Promise<Barang | null> {
    return this.barangRepo.findOneBy({id});
  }

  async updateBarang(id: number, updateBarangDto: UpdateBarangDto) {
    const barang = await this.barangRepo.findOneBy({id});
    
    Object.assign(barang, updateBarangDto);
    return await this.barangRepo.save(barang);
  }

  async removeBarang(id: number) {
    const barang = await this.barangRepo.findOneBy({id});
    return await this.barangRepo.remove(barang);
  }
}
