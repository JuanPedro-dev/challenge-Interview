import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // private userService: UserService = inject(UserService);
  private subs: Subscription = new Subscription();


  // TODO: Reemplazar  user: User = new User() y cargar los datos con el servicio en OnInit
  user: User = {
    id: '12345',
    name: 'Luz Doe Denny',
    password: 'your_password_here',
    balance: 5321656,
    card: [
      {
        id: '****-****-****-1234',
        alias: 'Luz D. Denny',
        key: 123,
        balance: 5321656,
        debits: [
          { date: new Date(2023, 11, 17), amount: 10000.55 },
          { date: new Date(2023, 11, 18), amount: 5000.12 },
          { date: new Date(2023, 11, 19), amount: 12000.16 },
          { date: new Date(2023, 11, 20), amount: 18000.0 },
          { date: new Date(2023, 11, 21), amount: 10000.04 },
          { date: new Date(2023, 11, 22), amount: 8000 },
        ],
        credits: [
          { date: new Date(2023, 11, 17), amount: 6130.55 },
          { date: new Date(2023, 11, 18), amount: 654.12 },
          { date: new Date(2023, 11, 19), amount: 1634.16 },
          { date: new Date(2023, 11, 20), amount: 98.0 },
          { date: new Date(2023, 11, 21), amount: 8000.04 },
          { date: new Date(2023, 11, 22), amount: 800 },
        ],
        expiration: new Date(),
      },
    ],
  };



  ngOnInit(): void {
    // subscribirse, traer la info, guardarla en user
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
