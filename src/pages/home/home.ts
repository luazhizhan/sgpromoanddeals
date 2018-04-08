import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PromoCodesListPage } from '../promo-codes-list/promo-codes-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPromoCodesList(value: string) {
    this.navCtrl.push(PromoCodesListPage, { id: value });
  }
}
