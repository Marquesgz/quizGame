// src/app/quiz/quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: Question;
  score: number = 0;
  isQuizCompleted: boolean = false;
  totalQuestions: number = 15;  // Set total questions to 15

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    const apiUrl = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple';  // API URL for programming questions
    this.http.get<any>(apiUrl).subscribe(response => {
      this.questions = response.results.map(item => {
        return {
          questionText: item.question,
          options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
          correctAnswer: item.correct_answer
        };
      });
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    });
  }

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
    this.score = 0;
    this.isQuizCompleted = false;
    this.fetchQuestions();  // Re-fetch questions
  }
}
