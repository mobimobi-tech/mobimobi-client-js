import { Api } from '../Api';

import {
  IAddProductStatusResponse,
  IProduct,
  IProductEditRequest,
  IProductGetResponse,
  IProductRemoveResponse,
  IStatusResponse,
} from './interfaces';

export class Catalog {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  public addProduct(product: IProduct): Promise<IAddProductStatusResponse> {
    if (!product) {
      throw new Error('[Mobimobi] wrong arguments');
    }

    return this.apiClient.makeRequest('/catalog/product', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  }

  public updateProduct(product: IProductEditRequest): Promise<IAddProductStatusResponse> {
    return this.apiClient.makeRequest(`/catalog/product/${product.product_id}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
    });
  }

  public removeProduct(productId: string): Promise<IProductRemoveResponse> {
    return this.apiClient.makeRequest(`/catalog/product/${productId}`, {
      method: 'DELETE',
    });
  }

  public removeAllProducts(): Promise<IProductRemoveResponse> {
    return this.apiClient.makeRequest('/catalog/product', {
      method: 'DELETE',
    });
  }

  public getProduct(productId: string): Promise<IProductGetResponse> {
    return this.apiClient.makeRequest(`/catalog/product/${productId}`);
  }

  public getStatus(): Promise<IStatusResponse> {
    return this.apiClient.makeRequest('/catalog/status');
  }
}
