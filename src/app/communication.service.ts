import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class CommunicationService {

  // SUBJECT
  /* Subject genérico, o Observable recebe apenas os dados transmitidos após o .subscribe() */

  // BEHAVIORSUBJECT
  /* Tipo de subject que pode guardar um valor inicial, que é transmitido tão logo é realizado o .subscribe() */
  /* O valor inicial é passado como parâmetro na inicialização */

  // REPLAYSUBJECT
  /* Tipo de subject que guarda uma quantidade de transmissões retroativas que são retransmitidas no Observable
    quando é realizado o .subscribe() */
  /* O parâmetro define a quantidade máxima de ações retroativas a serem retransmitidas */

  // meuSubject: BehaviorSubject<any> = new BehaviorSubject<any>({'nome': 'Padrão'});
  // meuSubject: Subject<any> = new Subject<any>();
  meuSubject: ReplaySubject<any> = new ReplaySubject<any>(1);

	constructor() {}

  transmitirDados(meusDados) {
    this.meuSubject.next(meusDados);
  }

  lerObservable() {
    return this.meuSubject.asObservable();
  }
}
