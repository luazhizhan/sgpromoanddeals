import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { PromoCodesListPage } from '../pages/promo-codes-list/promo-codes-list';
import { DealsListViewPage } from '../pages/deals-list-view/deals-list-view';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, icon: string, id: string }>;

  bannerConfig: AdMobFreeBannerConfig = {
    id: 'BANNER ID',
    isTesting: true,
    autoShow: true
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public admobFree: AdMobFree) {
    this.initializeApp();

    this.pages = [
      { title: 'Taxi Promo Code', icon: 'car', id: 'taxi' },
      { title: 'Food Delivery Promo Code', icon: 'pizza', id: 'foodDelivery' },
      { title: 'E-commerce Promo Code', icon: 'globe', id: 'ecommerce' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.admobFree.banner.config(this.bannerConfig);
      this.admobFree.banner.prepare().then(() => {
      }).catch(e => console.log(e));

      this.splashScreen.hide();
    });
  }

  openDefinePage(component) {
    switch (component) {
      case "HomePage":
        this.nav.setRoot(HomePage);
        break;
      case "AboutPage":
        this.nav.push(AboutPage);
        break;
      case "DealsListViewPage":
        this.nav.push(DealsListViewPage);
        break;
    };
  }

  openPage(page) {
    this.nav.push(PromoCodesListPage, { id: page.id });
  }
}
