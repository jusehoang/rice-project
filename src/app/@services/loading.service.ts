import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  showLoading = new BehaviorSubject<boolean>(false);

  increase() {
    this.showLoading.next(true);
  }

  decrease() {
    this.showLoading.next(false);
  }
}
