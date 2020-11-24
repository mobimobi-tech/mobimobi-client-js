export enum EEventType {
  'UNKNOWN',
  'PRODUCT_VIEW',
  'PRODUCT_TO_WISHLIST',
  'PRODUCT_TO_BASKET',
  'PRODUCT_SALE',
}

export interface IUserEvent {
  user_id: string;
  event_type: EEventType;
  event_platform: string;
  product_id: string;
  product_quantity: number;
  basket_items: string[];
  date: string;
}

export interface IUserEventAddResponse {
  status: string;
}

export interface IUserEventRemoveResponse {
  status: string;
}
