import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'template-fundamentals',
  templateUrl: 'template-fundamentals.component.html'
})
export class TemplateFundamentalsComponent implements OnInit, OnDestroy {
  resultado: string = '';
  resultados: Array<any> = [];
  @Input('titulo123') tituloteste: string = '';
  sub: Subscription;
  subscriptions = new Subscription();

  constructor(private commService: CommunicationService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  enviarDados(event) {
    this.commService.transmitirDados({'nome': 'Pedrinho'});
  }

  receberDadoReplay() {
    this.subscriptions.add(
      this.commService.lerObservable().subscribe((dadoRecebido) => {
        this.resultados.push(dadoRecebido);
      })
    );
  }

  excluirSubscribe() {
    this.subscriptions.unsubscribe();
  }

}
