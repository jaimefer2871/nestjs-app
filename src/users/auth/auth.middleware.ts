import { HttpCode, HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const { authorization } = req.headers

    if (!authorization) {
      throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED)
    }

    if (authorization != '1111') {
      throw new HttpException('forbidden', HttpStatus.FORBIDDEN)
    }
    next();
  }
}
