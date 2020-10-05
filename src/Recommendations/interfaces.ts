import { IProduct } from '../Catalog/interfaces';

export interface IRecommendationBaseParams {
  user_id: string;
  num?: number;
  brands?: string[];
}

export interface IRecommendationSimilarParams {
  user_id: string;
  product_id: string;
  brands?: string[];
  same_brand?: string;
  num?: number;
}

export interface IRecommendationBasketParams {
  user_id: string;
  num?: number;
}

export interface IRecommendationZonedParams {
  user_id: string;
  zone_id: string;
  num?: number;
}

export interface IRecommendationBaseData {
  status: string;
  data: IProduct[];
}
