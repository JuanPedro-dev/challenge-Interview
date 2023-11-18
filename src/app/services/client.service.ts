import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http: HttpClient = inject(HttpClient);

  private apiServerUrl = 'localhost:8080';
  private entity: string = 'clients';

  /**
   * Add a new client.
   *
   * @param client The client object to be created.
   * @returns An Observable that emits the created client.
   */
  public addClient(client: Client): Observable<Client> {
    return this.http
      .post<Client>(`${this.apiServerUrl}/${this.entity}`, client)
      .pipe(catchError(this.handleError<Client>('addClient')));
  }

  /**
   * Get a client by their ID.
   *
   * @param id The ID of the client to retrieve.
   * @returns An Observable that emits the client corresponding to the provided ID.
   */
  public getClientById(id: number): Observable<Client> {
    return this.http
      .get<Client>(`${this.apiServerUrl}/${this.entity}/${id}`)
      .pipe(catchError(this.handleError<Client>('getClientById')));
  }

  /**
   * Get all clients.
   *
   * @returns An Observable that emits an array of clients.
   */
  public getClients(): Observable<Client[]> {
    return this.http
      .get<Client[]>(`${this.apiServerUrl}/${this.entity}`)
      .pipe(catchError(this.handleError<Client[]>('getClients', [])));
  }

  /**
   * Update an existing client.
   *
   * @param client The client object with updated information.
   * @returns An Observable that emits the updated client.
   */
  public updateClient(client: Client): Observable<Client> {
    return this.http
      .put<Client>(`${this.apiServerUrl}/${this.entity}/${client.id}`, client)
      .pipe(catchError(this.handleError<Client>('updateClient')));
  }

  /**
   * Delete a client by their ID.
   *
   * @param clientId The ID of the client to be deleted.
   * @returns An Observable for the result of the deletion operation.
   */
  public deleteClient(clientId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiServerUrl}/${this.entity}/${clientId}`)
      .pipe(catchError(this.handleError<void>('deleteClient')));
  }

  /**
   * Handle HTTP operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
