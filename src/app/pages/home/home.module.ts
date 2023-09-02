import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
// import { CardComponent } from '../../card/card.component'; //IMPORTO EL COMPONENTE CARD

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    // IntroPage,
    // CardComponent, //DECLARO EL COMPONENTE CARD PARA USARLO EN EL HOME
  ],
  exports: []
})
export class HomePageModule {}
