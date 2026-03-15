import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, InputComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() listName: string = 'To Do';
}
