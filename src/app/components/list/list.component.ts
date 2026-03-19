import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgIf, NgFor } from '@angular/common';
import { CardFormComponent } from '../card/card-form/card-form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, CardFormComponent, NgIf, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() listName: string = 'To Do';

  cards: any[] = [
    { id: '1', title: 'Setup project', description: 'Initialize Angular project with routing', createdAt: '2026-03-15' },
    { id: '2', title: 'Create components', description: 'Build reusable UI components', createdAt: '2026-03-15' , author: 'Nicholas Nascimento'}
  ];
  showCardForm = false;
  editingCard: any = null;
  private nextId = 3;

  openCreateForm(): void {
    this.editingCard = null;
    this.showCardForm = true;
  }

  openEditForm(card: any): void {
    this.editingCard = card;
    this.showCardForm = true;
  }

  saveCard(data: any): void {
    if (this.editingCard) {
      const index = this.cards.findIndex(c => c.id === this.editingCard.id);
      if (index !== -1) {
        this.cards[index] = { ...this.cards[index], ...data };
      }
    } else {
      this.cards.push({ id: String(this.nextId++), createdAt: new Date().toISOString().split('T')[0], ...data });
    }
    this.closeForm();
  }

  closeForm(): void {
    this.showCardForm = false;
    this.editingCard = null;
  }
}
