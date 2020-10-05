import { Api } from '../Api';

import {
  IRecommendationBaseParams,
  IRecommendationBaseData,
  IRecommendationBasketParams,
  IRecommendationSimilarParams,
  IRecommendationZonedParams,
} from './interfaces';

export class Recommendations {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  public getBaseRecommendations(params: IRecommendationBaseParams): Promise<IRecommendationBaseData> {
    const { user_id: userId, num, brands } = params;

    let url = `?user_id=${userId}`;

    if (num) {
      url += `&num=${num}`;
    }

    if (brands) {
      url += `&brands=${brands.join(',')}`;
    }

    return this.apiClient.makeRequest(`/recommendations${url}`);
  }

  public getBasketRecommendations(params: IRecommendationBasketParams): Promise<IRecommendationBaseData> {
    const { user_id: userId, num } = params;

    let url = `?user_id=${userId}`;

    if (num) {
      url += `&num=${num}`;
    }

    return this.apiClient.makeRequest(`/recommendations/basket${url}`);
  }

  public getSimilarRecommendations(params: IRecommendationSimilarParams): Promise<IRecommendationBaseData> {
    const { user_id: userId, product_id: productId, same_brand: sameBrand, num, brands } = params;

    let url = `?user_id=${userId}&product_id=${productId}`;

    if (num) {
      url += `&num=${num}`;
    }

    if (brands) {
      url += `&brands=${brands.join(',')}`;
    }

    if (sameBrand) {
      url += `&brands=${sameBrand}`;
    }

    return this.apiClient.makeRequest(`/recommendations/similar${url}`, {
      body: JSON.stringify(params),
    });
  }

  public getZonedRecommendations(params: IRecommendationZonedParams): Promise<IRecommendationBaseData> {
    const { user_id: userId, zone_id: zoneId, num } = params;

    let url = `?user_id=${userId}&zone_id=${zoneId}`;

    if (num) {
      url += `&num=${num}`;
    }

    return this.apiClient.makeRequest(`/recommendations/zoned${url}`, {
      body: JSON.stringify(params),
    });
  }
}
