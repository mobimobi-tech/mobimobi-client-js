export interface IProduct {
  product_id: string;
  product_group_id: string;
  title: string;
  brand: string;
  price: string;
  currency: string;
  categories: string[];
  color: string;
  size: string;
  available_from: string;
  available_until: string;
  description: string;
  sale_price: string;
  on_sale_from: string;
  on_sale_until: string;
  tags: string[];
  age_group: string;
  gender: string;
}

export interface IProductEditRequest {
  product_id: string;
  product_group_id?: string;
  title?: string;
  brand?: string;
  price?: string;
  currency?: string;
  categories?: string[];
  color?: string;
  size?: string;
  available_from?: string;
  available_until?: string;
  description?: string;
  sale_price?: string;
  on_sale_from?: string;
  on_sale_until?: string;
  tags?: string[];
  age_group?: string;
  gender?: string;
}

export interface IStatusResponse {
  status: string;
}

export interface IAddProductStatusResponse {
  status: string;
}

export interface IProductGetResponse {
  status: string;
  data: IProduct;
}

export interface IProductRemoveResponse {
  status: string;
}
