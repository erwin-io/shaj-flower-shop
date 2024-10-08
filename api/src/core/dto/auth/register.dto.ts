import { Transform, Type } from "class-transformer";
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
  IsIn,
  IsOptional,
} from "class-validator";
import { Match } from "../match.decorator.dto";
import { ApiProperty } from "@nestjs/swagger";
import { DefaultCustomerUserDto } from "../customer-user/customer-user-base.dto";

export class RegisterCustomerUserDto extends DefaultCustomerUserDto {
  @ApiProperty()
  @Transform(({ obj, key }) => {
    return obj[key].toString();
  })
  @IsNotEmpty()
  password: string;
}