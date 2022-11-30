import { Component, OnInit } from '@angular/core';
import { ModalService } from './service/modal-service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ProjetoLilaFront';
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {    
  }



}
