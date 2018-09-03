import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class Communication2Service {
  // meuSubject: Subject<any> = new Subject<any>();
  meuSubject: Subject<any> = new Subject<any>();

	constructor() {}

  transmitirDados(meusDados) {
    this.meuSubject.next(meusDados);
  }

  lerObservable() {
    return this.meuSubject.asObservable();
  }
}
