import { Api } from '../Api';

import {
  IRecommendationBaseParams,
  IRecommendationBaseData,
  IRecommendationMostPopularParams,
  IRecommendationRecentlyViewedParams,
} from './interfaces';

export class Recommendations {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  public getPersonalizedRecommendations(params: IRecommendationBaseParams): Promise<IRecommendationBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/recommendations/products/personalized?${url}`);
  }

  public getMostPopularRecommendations(params: IRecommendationMostPopularParams): Promise<IRecommendationBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/recommendations/products/most_popular?${url}`);
  }

  public getBasketRecommendations(params: IRecommendationBaseParams): Promise<IRecommendationBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/recommendations/products/basket?${url}`);
  }

  public getSimilarRecommendations(params: IRecommendationBaseParams): Promise<IRecommendationBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/recommendations/products/similar?${url}`, {
      body: JSON.stringify(params),
    });
  }

  public getZonedRecommendations(params: IRecommendationBaseParams): Promise<IRecommendationBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/recommendations/products/zoned?${url}`, {
      body: JSON.stringify(params),
    });
  }

  public getRecentlyViewedRecommendations(params: IRecommendationRecentlyViewedParams): Promise<IRecommendationBaseData> {
    const url = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    return this.apiClient.makeRequest(`/recommendations/products/recently_viewed?${url}`, {
      body: JSON.stringify(params),
    });
  }
}
