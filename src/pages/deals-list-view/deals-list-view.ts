import { Component } from '@angular/core';
import { DealsService } from '../../services/deals.service';


@Component({
  selector: 'page-deals-list-view',
  templateUrl: 'deals-list-view.html'
})

export class DealsListViewPage {
  deals;
  showSpinner = true;

  constructor(private dealsSvc: DealsService) {
    this.bindJsonDataToVariable();
  }

  bindJsonDataToVariable() {
    this.dealsSvc.getAllDeals().subscribe(data => {
      this.showSpinner = true;
      this.deals = data;
      this.showSpinner = false;
    });
  }

}