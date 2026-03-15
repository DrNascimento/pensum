import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'app-board-view',
  standalone: true,
  imports: [HeaderComponent, BoardComponent],
  templateUrl: './board-view.component.html',
  styleUrl: './board-view.component.css'
})
export class BoardViewComponent {
  boardId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.boardId = this.route.snapshot.paramMap.get('id');
  }
}
