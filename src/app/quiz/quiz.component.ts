// src/app/quiz/quiz.component.ts
import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: Question[] = [
    {
      questionText: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      questionText: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    {
      questionText: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Ernest Hemingway'],
      correctAnswer: 'William Shakespeare'
    }
  ];
  currentQuestionIndex: number = 0;
  currentQuestion: Question = this.questions[this.currentQuestionIndex];
  score: number = 0;
  isQuizCompleted: boolean = false;

  onAnswerSelected(answer: string) {
    if (answer === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.isQuizCompleted = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.score = 0;
    this.isQuizCompleted = false;
  }
}
