import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/interfaces/user';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // TODO: declarar luego con card: Card 
  @Input() card: Card =  {
    id: '',
    alias: '',
    key: 0,
    balance: 0,
    debits: [],
    credits: [],
    expiration: new Date()
  }


}
