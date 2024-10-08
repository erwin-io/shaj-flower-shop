import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import {
  ArrayNotEmpty,
  IsArray,
  IsBooleanString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  ValidateNested,
} from "class-validator";

export class DefaultProductImageDto {
  @ApiProperty()
  @IsNotEmpty()
  sku: string;
  
  @ApiProperty()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty()
  @IsNotEmpty()
  data: string;
}