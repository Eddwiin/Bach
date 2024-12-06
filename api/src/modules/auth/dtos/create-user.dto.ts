import { IsString, Length, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 15)
  firstName: string;

  @IsString()
  @Length(2, 15)
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  password: string;
}
