import 'isomorphic-fetch';

import { Api } from '../../Api';
import { Search } from '..';

const response = [
  {
    product_id: 'Red T-Shirt XL',
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
  },
];

describe('Search', () => {
  const apiClient = new Api('testtoken');
  const search = new Search(apiClient);

  it('Should search', () => {
    return search.search({
      q: 'Red T-Shirt',
      user_id: 'USER8234'
    }).then((result) => {
      expect(response).toEqual(response);

      return result;
    });
  });
});
