import { Api } from './Api';
import { Catalog } from './Catalog';
import { User } from './User';

export class Client {
  public catalog: Catalog;
  public user: User;

  private token: string;
  private apiClient: Api;

  constructor(token: string) {
    this.token = token;

    this.apiClient = new Api(this.token);
    this.catalog = new Catalog(this.apiClient);
    this.user = new User(this.apiClient);
  }
}
