import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { PromoCodesListPage } from '../pages/promo-codes-list/promo-codes-list';
import { PromoCodesViewPage } from '../pages/promo-codes-view/promo-codes-view';
import { DealsListViewPage } from '../pages/deals-list-view/deals-list-view';

import { PromoCodesService } from '../services/promo-codes.service';
import { DealsService } from '../services/deals.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Clipboard } from '@ionic-native/clipboard';
import { AdMobFree } from '@ionic-native/admob-free';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    PromoCodesListPage,
    PromoCodesViewPage,
    DealsListViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    PromoCodesListPage,
    PromoCodesViewPage,
    DealsListViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    AdMobFree,
    PromoCodesService,
    DealsService,
    AngularFirestore,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
