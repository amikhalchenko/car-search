import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { CarAdModel } from '../../models/car-ad.model';
import {CarResponseModel} from '../../models/car-response.model';
import {TableFilterResultModel} from '../../models/table-filter-result.model';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
})
export class TableFilterComponent {
  @Output() searchChange: EventEmitter<TableFilterResultModel> = new EventEmitter<TableFilterResultModel>();

  selectedRadioButtonValue = 'title';

  constructor() {}

  onInputChange(searchText: string): void {
    this.searchChange.emit({ searchResult: searchText, selectedRadioValue: this.selectedRadioButtonValue });
  }

  onRadioGroupChange(event: MatRadioChange, searchValue: string): void {
    this.selectedRadioButtonValue = event.value;
    this.searchChange.emit({ searchResult: searchValue, selectedRadioValue: event.value });
  }
}
