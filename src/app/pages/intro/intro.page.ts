import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NaipesService } from 'src/app/services/naipes.service';
import { ICard } from 'src/app/shared/interfaces/card.Interface';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(
    private router: Router, private naipeService: NaipesService, private navCtrl: NavController
  ) { }

  /**
   * Invoco la funcion de animacion para el intro cada vez que la pagina es renderizada
   */
  ionViewWillEnter() {
    setTimeout(() => {
      this.animation();
    }, 10);
  }

  /**
   * Limpia el array cards cuando la pagina es destruida
   */
  ngOnDestroy() {
    this.cards = []
  }

  /** Declaro el array de cartas para renderizar */
  cards: Array<ICard> = [];


  /**
   * Temporiza el llenado del array cards para que se vallan renderizadndo en secuencia
   * @returns {void}
   */
  animation(): void {
    for (let index = 1; index < 8; index++) {
      setTimeout(() => {
        if (index == 1) {
          this.cards.push(...this.naipeService.getCards(1))
        } else if (index == 7) {
          setTimeout(() => {
            this.navCtrl.navigateRoot('/home')
          }, 500);
        } else {
          this.cards.push(...this.naipeService.getCards(1))
        }
      }, index * 100);
    }
  }

}
