import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchComponent } from './components/search/search.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { AveragePriceComponent } from './components/average-price/average-price.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';

import { CarApiService } from './services/car-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchComponent,
    CarTableComponent,
    AveragePriceComponent,
    TableFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [CarApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
