import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: any = { id: '', title: 'Untitled', description: '' };
  @Output() onClick = new EventEmitter<any>();

  handleClick(): void {
    this.onClick.emit(this.card);
  }
}
