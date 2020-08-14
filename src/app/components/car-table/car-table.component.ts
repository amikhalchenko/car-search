import { Component, Input, OnInit } from '@angular/core';
import { CarAdModel } from '../../models/car-ad.model';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent implements OnInit {
  @Input() carsAds: Array<CarAdModel> = [];

  currency = 'uah';

  constructor() {}

  ngOnInit(): void {}

  handleCurrencyChange(currency): void {
    if (currency) {
      this.currency = currency;
    }
  }


}
