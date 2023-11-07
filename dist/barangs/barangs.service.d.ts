import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';
import { Barang } from './entities/barang.entity';
import { Repository } from 'typeorm';
export declare class BarangsService {
    private readonly barangRepo;
    constructor(barangRepo: Repository<Barang>);
    createBarang(createBarangDto: CreateBarangDto): Promise<Barang>;
    findAllBarang(): Promise<Barang[]>;
    findOneBarang(id: string): Promise<Barang | null>;
    updateBarang(id: string, updateBarangDto: UpdateBarangDto): Promise<Barang>;
    removeBarang(id: string): Promise<Barang>;
}
