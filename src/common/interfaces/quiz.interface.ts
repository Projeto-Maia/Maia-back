export interface QuizOptions {
  id: string;
  text: string;
  redFlag: boolean;
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: QuizOptions[];
  correctOptionId: string;
  explanation: string;
}
