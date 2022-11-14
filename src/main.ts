import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  const $html = document.querySelector('html')!
  
  const $checkbox = document.querySelector('#switch')!
  const $checkboxFonte = document.querySelector('#fonte')!
  
  $checkbox.addEventListener('change', function(){
  $html.classList.toggle('contraste')
  })

  $checkboxFonte.addEventListener('change',function(){
    $html.classList.toggle('fonteMaior')
  })