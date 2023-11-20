import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/interfaces/client';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card =  {
    id: 0,
    card_number: '',
    alias: '',
    key_security: 0,
    balance: 0,
    expiration: new Date()
  }

  

}
