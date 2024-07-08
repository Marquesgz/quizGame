import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  @Input() question: Question;
  @Output() answerSelected = new EventEmitter<string>();
  selectedAnswer: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && !changes.question.firstChange) {
      this.selectedAnswer = null; 
    }
  }

  onSelect(answer: string) {
    this.selectedAnswer = answer;
    this.answerSelected.emit(answer);
  }

  isCorrect(answer: string): boolean {
    return this.question.correctAnswer === answer;
  }
}
