import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
