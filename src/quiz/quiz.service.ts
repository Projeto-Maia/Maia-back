/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { QuizQuestion } from 'src/common/interfaces/quiz.interface';
import * as rawQuizData from '../database/mock/quiz-data.json';

const quizData: QuizQuestion[] = rawQuizData as QuizQuestion[];

@Injectable()
export class QuizService {
  getQuestions(): QuizQuestion[] {
    return quizData;
  }
}
