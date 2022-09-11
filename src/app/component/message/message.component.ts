import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ThemeModule } from 'src/app/theme.module';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: true,
  imports: [CommonModule, ThemeModule],
})
export class MessageComponent implements OnInit {
  content!: string;
  type!: 'success' | 'warning' | 'error' | 'info';
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.content = data.content;
    this.type = data.type;
  }

  ngOnInit() {
  }

}
