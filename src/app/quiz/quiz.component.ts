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
  currentQuestion: Question | undefined;
  score: number = 0;
  isQuizCompleted: boolean = false;
  hasLost: boolean = false; 
  totalQuestions: number = 15;
  isLoading: boolean = true; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.isLoading = true; 
    const apiUrl = 'https://opentdb.com/api.php?amount=15&category=18&type=multiple';
    console.log('Fetching questions from API:', apiUrl);
    this.http.get<any>(apiUrl).subscribe(response => {
      console.log('API response:', response);
      if (response.results) {
        this.questions = response.results.map(item => {
          return {
            questionText: item.question,
            options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
            correctAnswer: item.correct_answer
          };
        });
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        console.log('Questions fetched:', this.questions);
        this.isLoading = false; 
      } else {
        console.error('No results in the API response:', response);
        this.isLoading = false; 
      }
    }, error => {
      console.error('Error fetching questions:', error);
      this.isLoading = false; 
    });
  }

  onAnswerSelected(answer: string) {
    if (this.currentQuestion && answer === this.currentQuestion.correctAnswer) {
      this.score++;
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      } else {
        this.isQuizCompleted = true;
      }
    } else {
      this.hasLost = true; 
      this.isQuizCompleted = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isQuizCompleted = false;
    this.hasLost = false; 
    this.fetchQuestions();
  }
}
