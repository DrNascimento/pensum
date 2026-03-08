import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>Bem-vindo ao seu projeto Angular!</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #dd0031;
      margin-bottom: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'Pensum';
}