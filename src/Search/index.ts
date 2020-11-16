import { Api } from '../Api';

import { ISearchBaseParams, ISearchBaseData } from './interfaces';

export class Search {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  public search(params: ISearchBaseParams): Promise<ISearchBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/search?${url}`);
  }

  public getSearchAPIStatus(): Promise<{ status: string }> {
    return this.apiClient.makeRequest('/search/status');
  }
}
