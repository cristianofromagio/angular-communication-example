import { Component, OnInit, Input } from '@angular/core';
import { Communication2Service } from './communication2.service';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'template2-fundamentals',
  template: `<h2>{{ titulo }}</h2>
<div>
  <p>{{ resultado }}</p>
</div>
<button (click)="enviarDados($event)">Atualizar</button>`,
  providers: [Communication2Service]
})
export class Template2FundamentalsComponent implements OnInit {
  resultado: string = '';
  @Input('titulo') titulo: string = '';

  constructor(private comm2Service: Communication2Service,
              private commService: CommunicationService) {}

  ngOnInit() {}

  enviarDados(event) {
    this.commService.transmitirDados({'nome': 'João', 'idade': 15});
  }

}
