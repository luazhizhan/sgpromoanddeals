import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PromoCodesViewPage } from '../promo-codes-view/promo-codes-view'
import { TaxiCompanies } from '../../data/companies/taxi-companies'
import { FoodDeliveryCompanies } from '../../data/companies/food-delivery-companies'
import { EcommerceCompanies } from '../../data/companies/ecommerce-companies';


@Component({
  selector: 'page-promo-codes-list',
  templateUrl: 'promo-codes-list.html'
})
export class PromoCodesListPage {
  companies;
  pageTitle;

  constructor(private navParams: NavParams, private navCtrl: NavController) {
    let id = this.navParams.get('id');
    if (id === "taxi") {
      this.companies = TaxiCompanies;
      this.pageTitle = "TAXI PROMO CODES";
    }
    else if (id === "ecommerce") {
      this.companies = EcommerceCompanies;
      this.pageTitle = "E-COMMERCE PROMO CODES";
    } else {
      this.companies = FoodDeliveryCompanies;
      this.pageTitle = "FOOD DELIVERY PROMO CODES";
    }
  }

  goToPromoCodesView(value: string) {
    this.navCtrl.push(PromoCodesViewPage, { id: value });
  }

}