import { ClipboardModule } from '@angular/cdk/clipboard';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { Baralho } from 'src/app/model/baralho';
import { CartaObjetivo } from 'src/app/model/cartaObjetivo';
import { Jogador } from 'src/app/model/jogador';
import { Sala } from 'src/app/model/sala';
import { MesaService } from 'src/app/service/mesa-service/mesa.service';
import { asyncError, findEl, RouterLinkDirectiveStub } from 'src/app/utils/testUtils';
import { environment } from 'src/environments/environment';
import { MesaCriadaComponent } from './mesa-criada.component';

/*
Teste unitário do componente.
Configurar Testbed apenas com a classe do componente e dublês das dependências
que devem ser injetadas no componente.
*/
describe('MesaCriadaComponent', () => {
  let component: MesaCriadaComponent;
  let fixture: ComponentFixture<MesaCriadaComponent>;
  let serviceSpy: jasmine.SpyObj<MesaService>;
  let findByHashSpy: jasmine.Spy;
  let router: Router;
  const hash = 'hash';
  const sala: Sala = {
    id: 'id',
    hash,
    baralho: {} as Baralho,
    cartaInicioId: 'cartaInicioId',
    cartaObjetivoEscolhida: {} as CartaObjetivo,
    cartasObjetivo: [],
    dado: 1,
    jogadores: [],
    jogadorEscolhido: {} as Jogador,
    opcoesCartaObjetivo: [],
    status: 'status'
  };
  const mockService = jasmine.createSpyObj<MesaService>({ findByHash: undefined });
  const mockRouter = jasmine.createSpyObj('Router', ['navigate','navigateByUrl']);
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MesaCriadaComponent,
        RouterLinkDirectiveStub
      ],
      imports: [
        MatIconModule,
        ClipboardModule,
      ],
      providers: [
        { provide: MesaService, useValue: mockService }, //Aqui foi passada uma referência para o dublê
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ 'hash': hash }) } } } //Aqui o dublê foi criado inline
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(MesaCriadaComponent);
    component = fixture.componentInstance;
    serviceSpy = TestBed.inject(MesaService) as jasmine.SpyObj<MesaService>;
    router = fixture.debugElement.injector.get(Router);
  });
  
  it('foi criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter o link da mesa renderizado com hash recebido na rota', () => {
    //Dublê do service consumido
    findByHashSpy = serviceSpy.findByHash.withArgs(hash).and.returnValue(of(sala));
    //Atualizar componente
    fixture.detectChanges();
    //Buscar elemento
    const linkDebugElement = findEl(fixture, 'linkDaMesa');
    const linkElement:HTMLParagraphElement = linkDebugElement.nativeElement;
    //Verificar valor esperado
    expect(findByHashSpy).toHaveBeenCalledWith(hash);
    expect(linkElement.innerText).toBe(`${environment.CLIENT_URL}entrarmesa/${hash}`);
  });

  xit('deve tratar um hash inexistente recebido na rota', () => {
    //Observar que o componente não está implementado correto para tratar deste caso
  });

  xit('deve tratar o problema de não receber um hash na rota', () => {
    //Observar que o componente não está implementado correto para tratar deste caso
  });

  xit('deve tratar o problema de falha de consumo do service', fakeAsync(() => {
    //Observar que o componente não está implementado correto para tratar deste caso
    //Dublê do service consumido
    findByHashSpy = serviceSpy.findByHash.withArgs(hash).and.returnValue(asyncError(new Error('MesaService erro')));
    fixture.detectChanges();
  }));

  it('deve indicar ao Router para navegar quando botão de iniciar jogo for clicado', () => {
    //Dublê do service consumido
    findByHashSpy = serviceSpy.findByHash.withArgs(hash).and.returnValue(of(sala));
    fixture.detectChanges();
    //Buscar elemento
    const buttonDebugElement = findEl(fixture, 'btnIniciar');
    //Executar o clique
    buttonDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    //Verificar argumentos passados para a navegação
    //const routerSpy = router.navigate as jasmine.Spy;
    //expect(routerSpy.calls.mostRecent().args[0]).toHaveBeenCalledWith(['/jogo',hash]);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/jogo',hash]);
  });

  it('deve indicar ao Router para navegar quando botão voltar for clicado', () => {
    //Dublê do service consumido
    findByHashSpy = serviceSpy.findByHash.withArgs(hash).and.returnValue(of(sala));
    fixture.detectChanges();
    //Buscar elemento
    const buttonDebugElement = findEl(fixture, 'btnVoltar');
    //Executar o clique
    buttonDebugElement.triggerEventHandler('click');
    fixture.detectChanges();
    //Verificar argumentos passados para a navegação
    const routerLink = buttonDebugElement.injector.get(RouterLinkDirectiveStub);
    expect(routerLink.navigatedTo).toEqual(['']);
  });
});

/*
describe('MesaCriadaComponent', () => {
  let component: MesaCriadaComponent;
  let fixture: ComponentFixture<MesaCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesaCriadaComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function obterValorPorId(nomeId: string): string {
    return fixture.debugElement.query(By.css(nomeId)).nativeElement.innerHTML;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar se o botão iniciar partida contém a mensagem "Iniciar Jogo"', () => {
    const botaoIniciarJogo = obterValorPorId('#iniciar');
    expect(component.carregando).toBeFalse();
    expect(botaoIniciarJogo.trim()).toContain('Iniciar Jogo')
  })

  it('deve alterar a variável "carregando" para true ao clicar', () => {
    const carregando = component.carregando;
    expect(component.carregando).toBeFalsy();
    const botao = fixture.nativeElement.querySelector('.btn');
    botao.click();
    expect(carregando.valueOf).toBeTruthy();
  });
});
*/

