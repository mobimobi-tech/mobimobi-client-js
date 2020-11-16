import { IProduct } from '../Catalog/interfaces';

export enum EChoose {
  'yes',
  'no',
}

interface IObjectKeys {
  [key: string]: string | number | undefined | string[] | EChoose;
}

export interface ISearchBaseParams extends IObjectKeys {
  q: string;
  user_id: string;
  num?: number;
  brands?: string[];
  full_product_info?: EChoose;
}

export interface ISearchBaseData {
  status: string;
  data: IProduct[];
}
