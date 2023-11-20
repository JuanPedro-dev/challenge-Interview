import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Client, Transaction } from 'src/app/interfaces/client';
import { ClientService } from '../../services/client.service';

import { Subscription } from 'rxjs';

import { userMock } from 'src/app/mocks/user.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private userService: ClientService = inject(ClientService);
  private subs: Subscription = new Subscription();

  public user!: Client;
  public dataCredits: Transaction[] = [];
  public dataDebits: Transaction[] = [];

  ngOnInit(): void {
    const subscription = this.userService.getClientById(1).subscribe({
      next: (client: Client) => {

        // TODO: reemplazar userMock -> client para usar información de la API
        this.user = userMock;
        
        for (let i = 0; i < this.user.transactions.length; i++) {
          if (this.user.transactions[i].type == 'DEBITO') {
            this.dataDebits.push(this.user.transactions[i]);
          } else {
            this.dataCredits.push(this.user.transactions[i]);
          }
        }
      },
      error: (err) => {console.log(err);},
    });

    this.subs.add(subscription);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
