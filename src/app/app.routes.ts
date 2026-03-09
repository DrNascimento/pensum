import { Routes } from '@angular/router';
import { BoardViewComponent } from './pages/board-view/board-view.component';

export const routes: Routes = [
  { path: 'boards/:id', component: BoardViewComponent },
  { path: '', redirectTo: '/boards/1', pathMatch: 'full' }
];
