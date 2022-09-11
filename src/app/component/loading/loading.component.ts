import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/@services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingService]
})
export class LoadingComponent implements OnInit {
  showLoading = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.showLoading.subscribe(loading => {
      this.showLoading = loading;
    })
  }

}
