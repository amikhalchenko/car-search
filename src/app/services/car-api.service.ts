import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarApiService {
  private readonly API_KEY = '0WCtRMkh3qFOzwU2mMofCU0SSDWOAtmPPk8CYvoD';
  private readonly DEVELOPERS_RIA_BASE_URL = 'https://developers.ria.com/auto/';

  constructor(private http: HttpClient) {}

  fetchTypesOfTransport(): Observable<any> {
    return this.http.get(
      `${this.DEVELOPERS_RIA_BASE_URL}categories/?api_key=${this.API_KEY}`
    );
  }

  /**
   * Fetch available car's brands
   * @param categoryId - type of transport id
   */
  fetchBrands(categoryId): Observable<any> {
    return this.http.get(
      `${this.DEVELOPERS_RIA_BASE_URL}categories/${categoryId}/marks?api_key=${this.API_KEY}`
    );
  }

  /**
   * Fetch available models for specific brand
   * @param categoryId - type of transport id
   * @param markId - brand id
   */
  fetchModels(categoryId, markId): Observable<any> {
    return this.http.get(
      `http://api.auto.ria.com/categories/${categoryId}/marks/${markId}/models?api_key=${this.API_KEY}`
    );
  }

  search(markId: number, modelId: number): Observable<any> {
    return this.http.get(
      this.DEVELOPERS_RIA_BASE_URL +
        `search?api_key=${this.API_KEY}&marka_id[0]=${markId}&model_id[0]=${modelId}`
    );
  }

  fetchAutoById(autoId: number): Observable<any> {
    return this.http.get(this.DEVELOPERS_RIA_BASE_URL + `info?api_key=${this.API_KEY}&auto_id=${autoId}`);
  }
}
