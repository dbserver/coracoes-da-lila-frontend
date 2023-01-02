import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})
export class AcessibilidadeComponent implements OnInit {
  esconderFonte:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.length > 0){
      this.esconderFonte = true;
      this.fonteTamanhoNormal()
    }
     
   }

  toggleClass(classe: string) {
    
    const $html = document.querySelector('html')!
    $html.classList.toggle(classe);

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
