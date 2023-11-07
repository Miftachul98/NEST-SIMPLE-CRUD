"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBarangDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_barang_dto_1 = require("./create-barang.dto");
class UpdateBarangDto extends (0, mapped_types_1.PartialType)(create_barang_dto_1.CreateBarangDto) {
}
exports.UpdateBarangDto = UpdateBarangDto;
//# sourceMappingURL=update-barang.dto.js.map