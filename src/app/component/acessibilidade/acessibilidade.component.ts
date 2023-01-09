import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})
export class AcessibilidadeComponent implements OnInit {
  
  @Input() esconderFonte!: boolean
  
  constructor() { }

  ngOnInit(): void {
    this.botaoAjustarFonte()
   }

  botaoAjustarFonte(){
    if(this.esconderFonte != true){
      this.esconderFonte = false;
    }else{
      this.esconderBotaoAjusteFonte()
      this.fonteTamanhoNormal()
    }
  }

  toggleClass(classe: string) {
    
    const $html = document.querySelector('html')!
    $html.classList.toggle(classe);

  }


  esconderBotaoAjusteFonte(){
    this.esconderFonte = true;
  }

  fonteTamanhoNormal(){
    const $html = document.querySelector('html')!
    $html.classList.remove('fonteMaior')
  }

}

//   const $html = document.querySelector('html')!
//   const $checkbox = document.querySelector('#switch')!
//   const $checkboxFonte = document.querySelector('#fonte')!

//    $checkbox.addEventListener('change', function() {
//     $html.classList.toggle('contraste')
//   })

//  $checkboxFonte.addEventListener('change',function() {
//     $html.classList.toggle('fonteMaior')
//   })
