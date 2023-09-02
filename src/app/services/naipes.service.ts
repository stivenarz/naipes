import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaipesService {

  constructor() {
    this.getNaipes()
  }

  private naipes: any = [];

  Naipes() {
    return this.naipes
  }

  /**
   * Devuelve el valor de la carta en numero o letra
   * @param number 
   * @returns {string}
   */
  getValue(number: number): any {
    if (number === 1) {
      return 'A'
    } else if (number === 11) {
      return 'J'
    } else if (number === 12) {
      return 'Q'
    } else if (number === 13) {
      return 'K'
    } else {
      return number
    }
  }

  /**
   * Crea un array con 52 cartas
   * @returns {void}
   */
  private getNaipes(): void {
    this.naipes = [];

    const types = ['corazon', 'picas', 'diamante', 'trebol']
    for (let type of types) {

      for (let i = 1; i < 14; i++) {
        const card = {
          value: this.getValue(i),
          image: type
        };

        this.naipes.push(card)

      }
    }

  }

  /**
 * Obtiene x numero de cartas al azar del mazo de 52 cartas
 * @param cuantity 
 * @returns {array}
 */
  getCards(cuantity: number): Array<any> {
    const elements: any = [];
    while (elements.length < cuantity) {
      const ind = Math.floor(Math.random() * this.naipes.length);
      const element = this.naipes[ind];

      if (!elements.includes(element)) {
        elements.push(element);
      }
    }
    return elements;
  }

}
