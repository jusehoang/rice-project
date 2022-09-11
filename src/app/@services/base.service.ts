import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  showFooter: BehaviorSubject<boolean>;
  constructor() {
    this.showFooter = new BehaviorSubject<boolean>(false);
  }
}
