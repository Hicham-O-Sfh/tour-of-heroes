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
    this.showSuccess(message, "Trouvé !");
  }

  clear(): void {
    this.messages = [];
    this.showInfo("LOG nettoyé !", "Info");
  }

  showSuccess(message: string, title: string): void {
    this.toastr.success(message, title,{
      toastClass : "ngx-toastr mt-5"
    });
  }

  showInfo(message: string, title: string): void {
    this.toastr.info(message, title);
  }
}
