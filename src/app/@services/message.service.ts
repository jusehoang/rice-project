import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MessageComponent } from "../component/message/message.component";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  createMessage(message: Message) {
    this.snackBar.openFromComponent(MessageComponent, {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: {
        content: message.content,
        type: message.type
      },
      panelClass: 'snack-bar-container'
    })
  }
}

export interface Message {
  content: string;
  title?: string;
  type: 'success' | 'warning' | 'error' | 'info'
}
