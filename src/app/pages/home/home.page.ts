import { Component } from '@angular/core';
import { NaipesService } from '../../services/naipes.service';
import { ICard } from 'src/app/shared/interfaces/card.Interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    private naipeService: NaipesService
  ) { }


  naipes = this.naipeService.Naipes();

  /** Variable para almacenar las tarjetas que se van a renderizar */
  cards: Array<ICard> = [];
  /** Variable para almacenar la opcion de cartas seleccionada */
  option: any = null;
  /** Variable para almacenar las alertas de los pares y trios */
  alerts: any = [];
  /** Variable para inicializar el temporizador para quitar las alertas */
  clearTime: any = null;

  /**
   * Setea la variable option con la seleccion de despacho de cartas (1 o 5) y setea la variable cards 
   * @param {any} option
   * @returns {void}
   */
  setOption(option: any): void {
    this.option = option;
    this.cards = [];

    this.cards = [...this.naipeService.getCards(option)]

    this.setAlerts()

  }

  /**
   * Obtener un array con las veces que se repite el valor de las cartas en el array cards
   * @returns {array}
   */
  getDuplicates(): Array<any> {
    const vieweds: any = {};
    for (let card of this.cards) {
      const value = card['value']

      if (vieweds[value]) {
        vieweds[value]++;
      } else {
        vieweds[value] = 1;
      }
    }
    return vieweds;
  }

  /**
   * Setea el array alerts para renderizar alertas cuando salen pares o triples
   *@returns {void}
   */
  setAlerts(): void {
    this.alerts = [];
    const vieweds = this.getDuplicates();

    for (let prop in vieweds) {
      if (vieweds[prop] > 1) {
        let msg;
        switch (vieweds[prop]) {
          case 2:
            msg = 'Enjoy!, you have a pair of ' + prop
            break;
          case 3:
            msg = 'Yeah!, you have a trio of ' + prop
            break;
          default:
            msg = 'Woow!, you have ' + vieweds[prop] + ' of ' + prop
            break;
        }
        this.alerts.push(msg)
        this.alertTemporizer()
      }
    }

  }

  /**
   * Setear un temporizador para quitar las alertas del Dom
   * @returns {void}
   */
  alertTemporizer(): void {
    clearTimeout(this.clearTime);
    this.clearTime = setTimeout(() => {
      this.alerts = [];
    }, 5000);
  }

}
