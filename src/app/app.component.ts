import { Component } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    RouterModule

  ]
})
export class AppComponent {
}
