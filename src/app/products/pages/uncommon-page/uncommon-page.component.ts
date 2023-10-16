import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural

  public clients: string[] = [
    'Alberto',
    'Elena',
    'Paco',
    'Guille',
    'Héctor',
    'Juanito',
    'Fulanito',
  ];
  deleteClient(): void {
    this.clients.shift();
  }

  public clientsMap = {
    '=0': 'no hay ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  //keyValue Pipe
  public person = {
    name: 'Alberto',
    age: '29',
    address: 'Belgrado, Serbia',
  };

  //Async Pipe

  public myObservableTime = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  });
}
