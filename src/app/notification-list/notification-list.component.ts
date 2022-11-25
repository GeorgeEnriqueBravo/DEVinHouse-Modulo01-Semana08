import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  valores = [{
    titulo: 'Reunião',
    subtitulo: "Obrigatório a participação de todos!",
    data: 'Há 30 minutos...',
    lido: false
  },
  {
    titulo: 'Convite',
    subtitulo: 'Você foi convidado para o evento!',
    data: 'Há 10 minutos...',
    lido: false
  },
  {
    titulo: 'Jogatina',
    subtitulo: 'Galera, hoje tem jogo após a aula, todos convocados 😎',
    data: 'Há 1 minuto...',
    lido: false
  }]

  lido(index: number): void {
    this.valores[index].lido = true
  }
}