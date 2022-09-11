import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from '../@services/base.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {
  showFooter = false;
  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.baseService.showFooter.subscribe(show => {
      this.showFooter = show;
    })
  }

  ngOnDestroy(): void {
    this.baseService.showFooter.unsubscribe();
  }
}
