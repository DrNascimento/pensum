import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id: string = '1';
  @Input() title: string = 'Untitled';
  @Input() description: string = 'Description description';

  get truncatedDescription(): string {
    return this.description.length > 100 
      ? this.description.substring(0, 100) + '...' 
      : this.description;
  }
}
