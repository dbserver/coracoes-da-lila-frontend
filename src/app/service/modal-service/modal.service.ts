import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  adicionar(modal: any) {    
    this.modals.push(modal);
  }

  remover(id: string) {    
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  abrir(id: string) {    
    const modal = this.modals.find((x) => x.id === id);
    modal.abrir();
  }

  fechar(id: string) {    
    const modal = this.modals.find((x) => x.id === id);
    modal.fechar();
  }
}
