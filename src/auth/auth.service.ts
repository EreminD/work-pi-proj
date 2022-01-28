import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/db/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthInput } from './entities/auth.input';
import { AuthType } from './entities/auth.type';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.usersService.findByName(data.username)
    const validPassword = data.pass === user.pass

    if (!validPassword) {
      throw new UnauthorizedException('Incorect Password')
    }

    const token = await this.jwtToken(user)
    return {
      user,
      token
    }  
  }

  private async jwtToken(user: User): Promise<string> {
    const payload = {
      username: user.name,
      sub: user.id
    }

    return this.jwtService.signAsync(payload)
  }
}
