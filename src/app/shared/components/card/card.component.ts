import { Component, Input } from '@angular/core';


@Component({
  selector: 'CardComponent',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  constructor() { }

  /** Variable que recibe los parametros de la carta */
    @Input() card: any = {};
}
