import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public user: User = {
    id: '',
    name: 'John Doe',
    password: '',
    balance: 0,
  }



}
