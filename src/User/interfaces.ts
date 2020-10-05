export interface IUserEvent {
  user_id: string;
  event_type: string;
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
