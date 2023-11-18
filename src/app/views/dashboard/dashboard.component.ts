import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from '../../services/client.service';
import { Subscription } from 'rxjs';
import { userMock } from '../../mocks/user.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private userService: ClientService = inject(ClientService);
  private subs: Subscription = new Subscription();
  public user!: Client;
  
  
  ngOnInit(): void {
    // TODO: API, subscribirse, traer la info, guardarla en user
    this.user = userMock;
    let userFromApi: any; 
    const subscription = this.userService.getClientById(1).subscribe({
      next: (client: Client) => { 
        userFromApi =client;
        console.log(client);
      },
      error: (err) => console.log(err),
      complete: () => console.log("fin de llamada")
    }); 


    this.subs.add(subscription);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
