// src/app/quiz/result/result.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() score: number;
  @Input() totalQuestions: number;
  @Input() hasLost: boolean; // Add this line
  @Output() restartQuiz = new EventEmitter<void>();

  restart() {
    this.restartQuiz.emit();
  }
}
