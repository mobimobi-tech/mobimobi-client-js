import { Api } from './Api';
import { Catalog } from './Catalog';
import { User } from './User';
import { Metrics } from './Metrics';
import { Recommendations } from './Recommendations';

export class Client {
  public catalog: Catalog;
  public user: User;
  public metrics: Metrics;
  public recommendations: Recommendations;

  private token: string;
  private apiClient: Api;

  constructor(token: string) {
    this.token = token;

    this.apiClient = new Api(this.token);
    this.catalog = new Catalog(this.apiClient);
    this.user = new User(this.apiClient);
    this.metrics = new Metrics(this.apiClient);
    this.recommendations = new Recommendations(this.apiClient);
  }
}
