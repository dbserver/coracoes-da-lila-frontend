import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Subscription } from 'rxjs';
import { Sala } from 'src/app/model/sala';
import { MesaJogoService } from 'src/app/service/mesa-jogo-service/mesa-jogo.service';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mesa-criada',
  templateUrl: './mesa-criada.component.html',
  styleUrls: ['./mesa-criada.component.scss'],
})
export class MesaCriadaComponent implements OnInit {
  sala: Sala;
  hash: string;
  link: string;

  carregando: boolean = false;
  private topicSubscription: Subscription = Subscription.EMPTY;


  constructor(
    private route: ActivatedRoute,
    private mesaService: MesaService,
    private mesaJogoService: MesaJogoService,
    private rxStompService: RxStompService,
    private router: Router
  ) {
    this.sala = {} as Sala;
    this.hash = '';
    this.link = '';
  }

  ngOnInit(): void {
    this.hash = String(this.route.snapshot.paramMap.get('hash'));
    this.link = `${environment.CLIENT_URL}entrarmesa/${this.hash}`;
    this.mesaService
       .findByHash(this.hash)
       .subscribe((sala) => (this.sala = sala));   
    

    this.topicSubscription = this.rxStompService
      .watch(`/gameplay/game-update/${this.hash}`)
      .subscribe((msg: Message) => {
        //recebe uma sala pelo websocket e envia para o mesa-jogo service..
        this.mesaJogoService.getemitSalaSubject().next(JSON.parse(msg.body));
      });
  }

  roteamento() {
    this.carregando = true;
    this.router.navigate(['/jogo', this.sala.hash]);
    this.mesaService
    .esconderBotaoFonteMaior();
  }


  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }
  
}
