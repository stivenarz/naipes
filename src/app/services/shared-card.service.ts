import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class SharedCardService {
  
  private option = new BehaviorSubject<number>(0);
  option$: Observable<any> = this.option.asObservable();

  /**
   * Setea la variable option para publicarla en los modulos con Observable
   * @param value 
   */
  setOption(value: any){
    this.option.next(value)
  }

}
