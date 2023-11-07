import { BarangsService } from './barangs.service';
import { CreateBarangDto } from './dto/create-barang.dto';
import { UpdateBarangDto } from './dto/update-barang.dto';
export declare class BarangsController {
    private readonly barangsService;
    constructor(barangsService: BarangsService);
    create(createBarangDto: CreateBarangDto): Promise<import("./entities/barang.entity").Barang>;
    findAll(): Promise<import("./entities/barang.entity").Barang[]>;
    findOne(id: string): Promise<import("./entities/barang.entity").Barang>;
    update(id: string, updateBarangDto: UpdateBarangDto): Promise<import("./entities/barang.entity").Barang>;
    remove(id: string): Promise<import("./entities/barang.entity").Barang>;
}
