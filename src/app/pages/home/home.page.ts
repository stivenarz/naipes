import { SharedCardService } from './../../services/shared-card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private sharedCardService: SharedCardService, private router: Router
  ) { }

  ngOnInit() {
    this.sharedCardService.option$.subscribe((value)=>{
      this.option = value
    })
  }

  /** Variable para almacenar la opcion de cartas seleccionada */
  option: any = null;

  /**
   * Setea la variable option con la seleccion de despacho de cartas (1 o 5) y setea la variable cards 
   * @param {any} option
   * @returns {void}
   */
  setOption(option: any): void {
    this.router.navigateByUrl('/view');
    this.sharedCardService.setOption(option);
  }

}
