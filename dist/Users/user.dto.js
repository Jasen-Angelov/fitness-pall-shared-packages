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
exports.UserDTO = exports.UserRole = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["TRAINER"] = "trainer";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
class UserDTO {
}
exports.UserDTO = UserDTO;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 50),
    __metadata("design:type", String)
], UserDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UserDTO.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(UserRole),
    __metadata("design:type", String)
], UserDTO.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }) // never include in plain output
    ,
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 128),
    (0, class_validator_1.Matches)(/(?=.*[A-Z])/, {
        message: 'password must contain at least one uppercase letter',
    }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 128),
    __metadata("design:type", String)
], UserDTO.prototype, "confirmPassword", void 0);
