import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOutsideDto {
  @ApiProperty({ example: 'Spoyler', description: 'Car`s outside updates' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
