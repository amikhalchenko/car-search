import { Component, OnInit } from '@angular/core';
import { CarAdModel } from '../../models/car-ad.model';
import * as XLSX from 'xlsx';
import { TableFilterResultModel } from '../../models/table-filter-result.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  searchResults: Array<CarAdModel> = [];
  filteredResults = [];
  isFilterShowed = false;

  constructor() {}

  ngOnInit(): void {}

  handleSearchResults(searchResults): void {
    this.searchResults = searchResults;
    this.filteredResults = [...searchResults];
  }

  onFilterResultChange(filterResult: TableFilterResultModel): void {
    this.filteredResults = this.searchResults.filter((carAd) => {
      return carAd[filterResult.selectedRadioValue]
        .toString()
        .toLowerCase()
        .includes(filterResult.searchResult.toLowerCase());
    });
  }

  saveTableAsExcel(): void {
    const ws = XLSX.utils.table_to_sheet(document.getElementById('cars_table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Автомобілі');

    XLSX.writeFile(wb, 'cars.xlsx');
  }
}
