"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarangsModule = void 0;
const barang_entity_1 = require("./entities/barang.entity");
const common_1 = require("@nestjs/common");
const barangs_service_1 = require("./barangs.service");
const barangs_controller_1 = require("./barangs.controller");
const typeorm_1 = require("@nestjs/typeorm");
let BarangsModule = class BarangsModule {
};
exports.BarangsModule = BarangsModule;
exports.BarangsModule = BarangsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([barang_entity_1.Barang])],
        controllers: [barangs_controller_1.BarangsController],
        providers: [barangs_service_1.BarangsService],
    })
], BarangsModule);
//# sourceMappingURL=barangs.module.js.map