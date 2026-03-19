import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { BoardFormComponent } from '../board/board-form/board-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, BoardFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  showBoardsDropdown = false;
  showBoardForm = false;
  boards: { id: number; name: string }[] = [
    { id: 1, name: 'My Kanban Board' }
  ];

  private nextId = 2;

  constructor(private router: Router) {}

  toggleDropdown(): void {
    this.showBoardsDropdown = !this.showBoardsDropdown;
    if (!this.showBoardsDropdown) this.showBoardForm = false;
  }

  createBoard(data: { name: string }): void {
    const board = { id: this.nextId++, name: data.name };
    this.boards.push(board);
    this.showBoardForm = false;
    this.navigateToBoard(board.id);
  }

  navigateToBoard(id: number): void {
    this.showBoardsDropdown = false;
    this.router.navigate(['/boards', id]);
  }
}
