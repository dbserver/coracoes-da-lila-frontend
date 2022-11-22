import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaHistoriaComponent } from './tela-historia.component';

describe('TelaHistoriaComponent', () => {
  let component: TelaHistoriaComponent;
  let fixture: ComponentFixture<TelaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHistoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Validar apresentação do conteúdo da página História do Jogo', () => {
    
    it('deve conter o componente painel-voltar com botão e logo', () => {
      let telaHistoria = fixture.nativeElement.innerHTML;
      expect(telaHistoria).toContain('<app-painel-voltar');
    })

    it('deve conter o texto da história do jogo conforme o protótipo', () => {
      
      let bodyTelaHistoria = fixture.nativeElement.innerHTML;
      expect(bodyTelaHistoria).toContain('já era forte na DB');
      expect(bodyTelaHistoria).toContain('As premissas que orientaram a criação do Corações da Lila foram:');
      expect(bodyTelaHistoria).toContain('O jogo físico foi apresentado no GUTS-RS, Tecnopuc Experience, AgileBrazil em Belo Horizonte e TDC');
    })

    it('deve conter as imagens com texto alternativo da página igual ao protótipo', () => {
      
      let imagens = fixture.nativeElement.querySelectorAll('img');

      expect(imagens[0].alt).toEqual('Caixas de vários jogos sobre uma mesa, com cartazes relacionando as particularidades de cada um com o trabalho, por exemplo criatividade, cooperação, priorização, etc.');
      expect(imagens[1].alt).toEqual('Protótipo com papeis coloridos recortados à mão e anotações semi-ilegíveis que deviam fazer sentido na época')
      expect(imagens[2].alt).toEqual('Quatro mulheres brancas sorriem e mostram cópias do manual e das cartas do jogo, que também está disposto numa mesinha de vidro entre elas.')
    })
  })

});
