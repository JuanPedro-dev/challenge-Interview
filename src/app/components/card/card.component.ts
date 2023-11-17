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
  @Input() card: any =  {
    id: '',
    alias: '',
    balance: 0,
    expiration: new Date(),
    debitos: [],
    creditos: []
  }


}
