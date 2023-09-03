import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NaipesService } from 'src/app/services/naipes.service';
import { ICard } from 'src/app/shared/interfaces/card.Interface';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(
    private router: Router, private naipeService: NaipesService
  ) { }

  ionViewWillEnter() {
    /** Invoco la funcion de animacion para el intro */
    this.animation();
  }

  /** Declaro y seteo el mazo de 52 cartas */
  naipes = this.naipeService.Naipes();
  /** Declaro el array de cartas para renderizar */
  cards: Array<ICard> = [];

  /**
   * Temporiza el llenado del array cards para que se vallan renderizadndo en secuencia
   * @returns {void}
   */
  animation(): void {
    this.cards = [];
    for (let index = 1; index < 8; index++) {

      setTimeout(() => {
        if (index == 1) {
          this.cards.push(...this.naipeService.getCards(1))
        } else if (index == 7) {
          setTimeout(() => {
            this.router.navigateByUrl('/home')
          }, 500);
        } else {
          this.cards.push(...this.naipeService.getCards(1))
        }
      }, index * 100);
    }

  }

}
