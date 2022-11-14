import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})
export class AcessibilidadeComponent implements OnInit {

  constructor() { }


  

  ngOnInit(): void {
    const $html = document.querySelector('html')!
  
  const $checkbox = document.querySelector('#switch')!
  const $checkboxFonte = document.querySelector('#fonte')!
  
  $checkbox.addEventListener('change', function(){
  $html.classList.toggle('contraste')
  })

  $checkboxFonte.addEventListener('change',function(){
    $html.classList.toggle('fonteMaior')
  })
  }

}
