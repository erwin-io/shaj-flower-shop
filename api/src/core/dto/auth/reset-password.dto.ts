import { IsEmail, IsNotEmpty } from "class-validator";
import { Match } from "../match.decorator.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";

export class CustomerUserResetPasswordSubmitDto {
  @ApiProperty()
  @IsEmail({
    message: "Not allowed, invalid email format",
  })
  @IsNotEmpty({
    message: "Not allowed, email is required!"
  })
  email: string;
}

export class CustomerUserResetVerifyDto extends CustomerUserResetPasswordSubmitDto{
  @ApiProperty()
  @Transform(({ obj, key }) => {
    return obj[key].toString();
  })
  @IsNotEmpty({
    message: "Not allowed, otp is required!"
  })
  @IsNotEmpty()
  otp: string;
}

export class ProfileResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @Match("password")
  @IsNotEmpty()
  confirmPassword: string;
}

export class UpdateUserPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @Match("password")
  @IsNotEmpty()
  confirmPassword: string;
}


export class CustomerUserResetPasswordDto extends CustomerUserResetVerifyDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @Match("password")
  @IsNotEmpty()
  confirmPassword: string;
}
