import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  [x: string]: any;

  public typ:string = '';

  constructor() { }

  private sendDataSource: BehaviorSubject<any> = new BehaviorSubject(null);
  private setValueSource: BehaviorSubject<any> = new BehaviorSubject(this.typ);

  public set sendData(data) {
    this.sendDataSource.next(data);
  }

  public set setValue(value) {
    this.setValueSource.next(value);
  }

  public get sendData() {
    return this.sendDataSource.asObservable();
  }

  public get setValue() {
    return this.setValueSource.asObservable();
  }

}
