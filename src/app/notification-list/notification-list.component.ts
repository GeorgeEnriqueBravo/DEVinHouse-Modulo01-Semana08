import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {

  lidos: boolean | string;

  valores: any = [{
    img: 'https://thumbs.dreamstime.com/b/%C3%ADcone-da-mensagem-do-vetor-bolha-bate-papo-119319803.jpg',
    titulo: 'Reunião',
    subtitulo: "Obrigatório a participação de todos!",
    data: 'Há 30 minutos...',
    lido: false
  },
  {
    img: 'https://thumbs.dreamstime.com/b/%C3%ADcone-da-mensagem-do-vetor-bolha-bate-papo-119319803.jpg',
    titulo: 'Convite',
    subtitulo: 'Você foi convidado para o evento!',
    data: 'Há 10 minutos...',
    lido: false
  },
  {
    img: 'https://thumbs.dreamstime.com/b/%C3%ADcone-da-mensagem-do-vetor-bolha-bate-papo-119319803.jpg',
    titulo: 'Jogatina',
    subtitulo: 'Galera, hoje tem jogo após a aula, todos convocados 😎',
    data: 'Há 1 minuto...',
    lido: false
  }]

  valoresReais: any;

  constructor(
    private router: Router,
  ) {
    this.lidos = (this.router.getCurrentNavigation() as any).extras?.state?.status;
    console.log((this.router.getCurrentNavigation() as any))
    this.valores = (this.router.getCurrentNavigation() as any).extras?.state?.valores?.length > 0 ? (this.router.getCurrentNavigation() as any).extras?.state?.valores : this.valores;
  }

  lido(index: number): void {
    this.valores[index].lido = true;
  }

  verificaSeMostraNotificacao(notif: any): boolean {
    if (this.lidos === true) {
      return notif.lido === true;
    } else if (this.lidos === false) {
      return notif.lido === false;
    } else {
      return true;
    }
  }

  appFiltrando(botao: string): void {
    if (botao === "Todos") {
      this.router.navigate(['home/todos'], { state: { status: 'todos', valores: this.valores } });
    } else if (botao === "Lidos") {
      this.router.navigate(['home/lidos'], { state: { status: true, valores: this.valores } });
    } else if (botao === "Não Lidos") {
      this.router.navigate(["home/nao-lidos"], { state: { status: false, valores: this.valores } });
    }
  }
}