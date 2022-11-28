import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { ModalService } from '../service/modal-service/modal.service';

@Component({
  selector: 'jw-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  id!: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {    
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener(
      'click',
      (el: { target: { className: string } }) => {
        if (el.target.className === 'jw-modal') {
          this.fechar();
        }
      }
    );
    
    this.modalService.adicionar(this);
  }

  ngOnDestroy(): void {
    this.modalService.remover(this.id);
    this.element.remove();
  }

  abrir(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  fechar(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
