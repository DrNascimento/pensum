import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { ListFormComponent } from '../list/list-form/list-form.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor, NgIf, ListComponent, ListFormComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input() boardName: string = 'Untitled Board';

  lists: string[] = ['To Do', 'In Progress', 'Done'];
  showListForm = false;

  addList(data: { name: string }): void {
    this.lists.push(data.name);
    this.showListForm = false;
  }
}
