import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() score: number;
  @Input() totalQuestions: number;
  @Output() restartQuiz = new EventEmitter<void>();

  restart() {
    this.restartQuiz.emit();
  }
}
