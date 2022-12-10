import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

  @Output() filtrando: EventEmitter<string> = new EventEmitter<string>()

  botoes = ["Todos", "Lidos", "Não Lidos"]

  filtrar(botao: string) {
    this.filtrando.emit(botao);
  }
}
