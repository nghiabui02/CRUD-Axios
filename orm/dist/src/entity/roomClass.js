"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomClass = void 0;
const typeorm_1 = require("typeorm");
const student_1 = require("./student");
let roomClass = exports.roomClass = class roomClass {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], roomClass.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], roomClass.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], roomClass.prototype, "headMaster", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], roomClass.prototype, "studentAmount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_1.StudentPro, (StudentPro) => StudentPro.roomClass),
    __metadata("design:type", Array)
], roomClass.prototype, "studentPro", void 0);
exports.roomClass = roomClass = __decorate([
    (0, typeorm_1.Entity)()
], roomClass);
//# sourceMappingURL=roomClass.js.map