/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizQuestion } from 'src/common/interfaces/quiz.interface';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  getQuiz(): QuizQuestion[] {
    return this.quizService.getQuestions();
  }
}
