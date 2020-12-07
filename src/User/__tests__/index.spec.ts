import 'isomorphic-fetch';

import { Api } from '../../Api';
import { User } from '..';
import { EEventType } from '../interfaces';

describe('User events', () => {
  const apiClient = new Api('testtoken');
  const user = new User(apiClient);

  it('Should add new user event', () => {
    return user
      .addUserEvent({
        user_id: 'USER8833',
        event_type: EEventType.PRODUCT_SALE,
        event_platform: 'ANDROID',
        product_id: 'SKU-5599',
        product_quantity: 0,
        basket_items: [
          {
            product_id: 'SKU-5599',
            product_quantity: 2,
          },
          {
            product_id: 'SKU-9449',
            product_quantity: 6,
          },
        ],
        date: '2020-05-12 14:12:42',
      })
      .then((result) => {
        expect(result).toEqual({ status: 'OK' });

        return result;
      });
  });
});
