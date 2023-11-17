import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{
  // private userService: UserService = inject(UserService);
  private subs: Subscription = new Subscription();

  // TODO: Reemplazar  user: User = new User() y cargar los datos con el servicio en OnInit
  user = {
    id: '',
    name: 'Luz Doe Denny',
    password: '',
    card : {
      id: '****-****-****-1234',
      alias: 'Luz D. Denny',
      balance: 5_321_656,
      expiration: new Date(),
      debitos: [10000.55, 5000.12, 12000.16, 6000.69, 18000.0, 10000.04, 8000],
      creditos: [6545.55, 5000.12, 12000.16, 6000.69, 18000.0, 10000.04, 8000]
    }
  }

  
  
  ngOnInit(): void {
    // subscribirse, traer la info, guardarla en user
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


}
