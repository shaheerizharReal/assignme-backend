import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

interface CurrentUser {
  userId: number;
  email: string;
}

@Controller('users')
@UseGuards(JwtAuthGuard) // Protect all routes in this controller
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@GetUser() currentUser: CurrentUser) {
    console.log('Current logged in user:', currentUser);
    return this.usersService.findAll();
  }
} 