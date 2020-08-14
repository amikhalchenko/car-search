import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CarAdModel } from '../../models/car-ad.model';

@Component({
  selector: 'app-average-price',
  templateUrl: './average-price.component.html',
  styleUrls: ['./average-price.component.scss'],
})
export class AveragePriceComponent implements OnInit, OnChanges {
  @Input() carAds: Array<CarAdModel> = [];
  @Input() currency = 'uah';

  minPrice = 0;
  averagePrice = 0;
  maxPrice = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.carAds) {
      if (this.carAds.length > 0) {
        let sum = 0;
        let min = this.carAds[0][this.currency];
        let max = this.carAds[0][this.currency];

        this.carAds.forEach((carAd) => {
          sum += carAd[this.currency];

          if (carAd.uah < min) {
            min = carAd[this.currency];
          }

          if (carAd.uah > max) {
            max = carAd[this.currency];
          }
        });

        this.minPrice = min;
        this.averagePrice = sum / this.carAds.length;
        this.maxPrice = max;
      }
    }
  }
}
