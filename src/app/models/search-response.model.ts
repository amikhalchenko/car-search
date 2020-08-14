export interface SearchResponseModel {
  result: SearchResponseResultModel;
}

export interface SearchResponseResultModel {
  search_result: SearchResultModel;
}

export interface SearchResultModel {
  ids: Array<string>;
}
