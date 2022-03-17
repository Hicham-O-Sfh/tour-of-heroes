import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor(private toastr: ToastrService) { }

  add(message: string): void {
    this.messages.push(message);
    this.showSuccess(message, "titre de test");
  }

  clear(): void {
    this.messages = [];
    this.showInfo("liste des messages nettoyé !", "titre");
  }

  showSuccess(message: string, title: string): void {
    this.toastr.success(message, title);
  }

  showInfo(message: string, title: string): void {
    this.toastr.info(message, title);
  }
}
