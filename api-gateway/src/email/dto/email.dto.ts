import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty({
    description: 'Email',
    example: 'btl@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'User Name',
    example: 'Dilshan',
  })
  username: string;

  @ApiProperty({
    description: 'Email Body',
    example: 'Dilshan. Bridge Tech Labs',
  })
  res: string;
}
