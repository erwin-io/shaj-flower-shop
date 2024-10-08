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
exports.CustomerUserResetPasswordDto = exports.UpdateUserPasswordDto = exports.ProfileResetPasswordDto = exports.CustomerUserResetVerifyDto = exports.CustomerUserResetPasswordSubmitDto = void 0;
const class_validator_1 = require("class-validator");
const match_decorator_dto_1 = require("../match.decorator.dto");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CustomerUserResetPasswordSubmitDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)({
        message: "Not allowed, invalid email format",
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: "Not allowed, email is required!"
    }),
    __metadata("design:type", String)
], CustomerUserResetPasswordSubmitDto.prototype, "email", void 0);
exports.CustomerUserResetPasswordSubmitDto = CustomerUserResetPasswordSubmitDto;
class CustomerUserResetVerifyDto extends CustomerUserResetPasswordSubmitDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => {
        return obj[key].toString();
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: "Not allowed, otp is required!"
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerUserResetVerifyDto.prototype, "otp", void 0);
exports.CustomerUserResetVerifyDto = CustomerUserResetVerifyDto;
class ProfileResetPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileResetPasswordDto.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileResetPasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, match_decorator_dto_1.Match)("password"),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProfileResetPasswordDto.prototype, "confirmPassword", void 0);
exports.ProfileResetPasswordDto = ProfileResetPasswordDto;
class UpdateUserPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUserPasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, match_decorator_dto_1.Match)("password"),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUserPasswordDto.prototype, "confirmPassword", void 0);
exports.UpdateUserPasswordDto = UpdateUserPasswordDto;
class CustomerUserResetPasswordDto extends CustomerUserResetVerifyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerUserResetPasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, match_decorator_dto_1.Match)("password"),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CustomerUserResetPasswordDto.prototype, "confirmPassword", void 0);
exports.CustomerUserResetPasswordDto = CustomerUserResetPasswordDto;
//# sourceMappingURL=reset-password.dto.js.map