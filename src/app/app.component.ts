import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Who Wants to Be a Programmer';
  isQuizStarted = false;

  startQuiz() {
    this.isQuizStarted = true;
  }
}
