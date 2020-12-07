import 'isomorphic-fetch';

import { Api } from '../../Api';
import { Catalog } from '..';

const mock = {
  product_id: 'TEST_T_SHIRT_ID',
  product_group_id: 'T-Shirt',
  title: 'Красная футболка',
  brand: 'Моя компания',
  price: '12.00',
  currency: 'USD',
  is_searchable: true,
  is_recommendable: true,
  categories: ['Cosmetics', 'Perfume'],
  color: 'Red',
  size: 'X-Large',
  available_from: '2020-05-12 14:12:42',
  available_until: '2021-05-12 14:12:42',
  description: 'Some cool description',
  sale_price: '9.99',
  on_sale_from: '2021-05-12 14:12:42',
  on_sale_until: '2021-05-12 23:59:59',
  tags: ['exclusive', 'face'],
  age_group: 'adult',
  gender: 'unisex',
};

describe('Catalog', () => {
  const apiClient = new Api('testtoken');
  const catalog = new Catalog(apiClient);

  const updated = { ...mock };
  updated.description = 'new desc';

  it('Should create new product', () => {
    return catalog.addProduct(mock).then((result) => {
      expect(result).toEqual({ status: 'OK' });

      return result;
    });
  });

  it('Should get previous created product', () => {
    return catalog.getProduct(mock.product_id).then((result) => {
      expect(result).toEqual(mock);

      return result;
    });
  });

  it('Should update previous created product', () => {
    return catalog.updateProduct(updated).then((result) => {
      expect(result).toEqual({ status: 'OK' });

      return result;
    });
  });

  it('Should get previous updated product', () => {
    return catalog.getProduct(updated.product_id).then((result) => {
      expect(result).toEqual(updated);

      return result;
    });
  });

  it('Should delete product', () => {
    return catalog.removeProduct(mock.product_id).then((result) => {
      expect(result).toEqual({ status: 'OK' });

      return result;
    });
  });

  it('Should delete all product', () => {
    return catalog.removeAllProducts().then((result) => {
      expect(result).toEqual({ status: 'OK' });

      return result;
    });
  });
});
