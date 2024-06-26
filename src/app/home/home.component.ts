import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() startQuiz = new EventEmitter<void>();

  onStartQuiz() {
    this.startQuiz.emit();
  }
}
