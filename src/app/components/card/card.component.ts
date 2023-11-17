import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // TODO: declarar luego con card: Card 
  @Input() card = {
    id: '****-****-****-1234',
    name: 'john Doe',
    balance: 0,
    expiration: new Date()
  }


}
