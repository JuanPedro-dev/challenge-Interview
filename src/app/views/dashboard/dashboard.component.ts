import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { userMock } from '../../mocks/user.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // private userService: UserService = inject(UserService);
  private subs: Subscription = new Subscription();
  public user!: User;
  
  
  ngOnInit(): void {
    // TODO: API, subscribirse, traer la info, guardarla en user
    this.user = userMock;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
