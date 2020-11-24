import { IProduct } from '../Catalog/interfaces';

export enum EChoose {
  'yes',
  'no',
}

interface IObjectKeys {
  [key: string]: string | number | undefined | string[] | EChoose;
}
export interface IRecommendationBaseParams extends IObjectKeys {
  user_id: string;
  num?: number;
  brands?: string[];
  categories?: string[];
  full_product_info?: EChoose;
  complete_with_most_popular?: EChoose;
  exclude_sold?: EChoose;
  exclude_added_to_basket?: EChoose;
  exclude_added_to_wishlist?: EChoose;
}

export type IRecommendationMostPopularParams = Omit<IRecommendationBaseParams, 'complete_with_most_popular'>;

export interface IRecommendationRecentlyViewedParams extends IObjectKeys {
  user_id: string;
  num?: number;
  full_product_info?: EChoose;
  exclude_sold?: EChoose;
  exclude_added_to_basket?: EChoose;
  exclude_added_to_wishlist?: EChoose;
}

export interface IRecommendationBaseData {
  status: string;
  data: IProduct[];
}
