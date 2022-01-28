import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwt } from 'config/jwt.config';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/db/entities/user.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: jwt.secretKey,
      });
    }
  
    async validate(payload: { username: string; sub: User['id'] }) {
      const user = this.userService.findById(payload.sub)

      if (!user) {
          return new UnauthorizedException('Unauthorized')
      }
      return user
  }
}
