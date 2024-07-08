import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  restartQuiz() {
    this.router.navigate(['/quiz']);
  }
}
