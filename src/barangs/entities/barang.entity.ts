import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'barangs' })
export class Barang {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nama:string
    
    @Column()
    stok_awal:number
    
    @Column()
    stok_akhir:number    
}
