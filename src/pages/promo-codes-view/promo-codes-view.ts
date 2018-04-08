import { Component } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { PromoCodesService } from '../../services/promo-codes.service';

@Component({
  selector: 'page-promo-codes-view',
  templateUrl: 'promo-codes-view.html'
})
export class PromoCodesViewPage {
  pageTitle;
  promoCodes;
  showSpinner = true;
  showNetworkCheck = false;
  id;

  constructor(private promoCodeSvc: PromoCodesService, private navParams: NavParams
    , private clipboard: Clipboard, private toastCtrl: ToastController) {
    this.id = this.navParams.get('id');
    switch (this.id) {
      case "grab":
        this.pageTitle = "GRAB PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "uber":
        this.pageTitle = "UBER PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "comfortdelgro":
        this.pageTitle = "COMFORTDELGRO PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "lazada":
        this.pageTitle = "LAZADA PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "zalora":
        this.pageTitle = "ZALORA PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "qoo10":
        this.pageTitle = "QOO10 PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "deliveroo":
        this.pageTitle = "DELIVEROO PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "foodpanda":
        this.pageTitle = "FOODPANDA PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
      case "ubereats":
        this.pageTitle = "UBEREATS PROMO CODES";
        this.bindJsonDataToVariable(this.id);
        break;
    }
  }

  onCopyBtnClick(copied: string) {
    this.clipboard.copy(copied).then(resolve => {
      let toast = this.toastCtrl.create({
        message: 'Text copied successfully.',
        duration: 2000,
        position: "bottom"
      });
      toast.present(toast);
    });
  }

  bindJsonDataToVariable(type: string) {
    this.promoCodeSvc.getPromoCodesByType(type).subscribe(data => {
      this.showSpinner = true;
      this.checkInternetConnection(data);
      this.promoCodes = data;
      this.showSpinner = false;
    });
  }

  checkInternetConnection(data) {
    this.showNetworkCheck = false;
    if (data.length == 0) {
      this.showNetworkCheck = true;
    }
  }
}