import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    console.log(req.path);
    throw new BadRequestException('Something is not good here...');
  }
}
