import { QuizModule } from './quiz/quiz.module';
import { LocationsModule } from './locations/locations.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [QuizModule, LocationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
