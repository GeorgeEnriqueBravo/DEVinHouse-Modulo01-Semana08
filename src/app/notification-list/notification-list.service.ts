import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationListService {

  readonly alteraValores = new EventEmitter();

  constructor() { }

  emitAlteraValores(arrayDeValores: any): void {
    this.alteraValores.emit(arrayDeValores);
  }
}
