import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'User Id',
    example: 'user001',
  })
  id: string;

  @ApiProperty({
    description: 'User Name',
    example: 'Dilshan',
  })
  name: string;

  @ApiProperty({
    description: 'Use Email',
    example: 'user@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'User Role',
    example: 'Software Engineer',
  })
  role: string;
}
