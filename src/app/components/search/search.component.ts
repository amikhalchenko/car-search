import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, Observable, of } from 'rxjs';
import { CarApiService } from '../../services/car-api.service';
import { CarResponseModel } from '../../models/car-response.model';
import { SearchResponseModel } from '../../models/search-response.model';
import { CarAdModel } from '../../models/car-ad.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onSearchResults: EventEmitter<Array<CarAdModel>> = new EventEmitter<
    Array<CarAdModel>
  >();

  brandControl = new FormControl();
  modelControl = new FormControl();

  filteredBrands: Observable<any>;
  brands = [];

  filteredModels: Observable<any>;
  models = [];

  searchResults: Array<CarAdModel> = [];

  private categoryId = 1;

  constructor(private carApiService: CarApiService) {}

  ngOnInit(): void {
    this.carApiService
      .fetchBrands(this.categoryId)
      .subscribe((data: Array<any>) => {
        this.brands = data;
        this.filteredBrands = of(data);
      });

    this.brandControl.valueChanges.subscribe((data) => {
      this.filteredBrands = of(this._filter(data, this.brands));
    });

    this.modelControl.valueChanges.subscribe((data) => {
      this.filteredModels = of(this._filter(data, this.models));
    });
  }

  private _filter(value: string, array: Array<any>): string[] {
    const filterValue = value.toLowerCase();

    return array.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  public getDisplayFn(): any {
    return (val) => this.display(val);
  }

  private display(value): string {
    return value ? value.name : value;
  }

  public getModels(brand: CarResponseModel): void {
    this.carApiService
      .fetchModels(this.categoryId, brand.value)
      .subscribe((data) => {
        this.models = data;
        this.filteredModels = of(data);
      });
  }

  public search(): void {
    const markId = this.brandControl.value.value;
    const modelId = this.modelControl.value.value;

    this.carApiService
      .search(markId, modelId)
      .subscribe((data: SearchResponseModel) => {
        const carAdRequests = [];
        data.result.search_result.ids.forEach((carAdId) => {
          carAdRequests.push(this.carApiService.fetchAutoById(Number(carAdId)));
        });

        forkJoin(carAdRequests).subscribe((result) => {
          result.forEach((searchResult: any) => {
            const carAdModel: CarAdModel = {
              title: searchResult.title,
              eur: searchResult.EUR,
              uah: searchResult.UAH,
              usd: searchResult.USD,
              fuelName: searchResult.autoData.fuelName,
              year: searchResult.autoData.year,
              race: searchResult.autoData.race,
              locationCityName: searchResult.locationCityName,
              addDate: searchResult.addDate,
            };
            this.searchResults.push(carAdModel);
            this.onSearchResults.emit(this.searchResults);
          });
        });
      });
  }
}
