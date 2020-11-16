import { Api } from '../Api';

import {
  IUserEvent,
  IUserEventAddResponse,
  IUserEventRemoveResponse,
} from './interfaces';

export class User {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  public addUserEvent(userEvent: IUserEvent): Promise<IUserEventAddResponse> {
    if (!userEvent) {
      throw new Error('[Mobimobi] wrong arguments');
    }

    return this.apiClient.makeRequest('/user/event', {
      method: 'POST',
      body: JSON.stringify(userEvent),
    });
  }

  public removeAllUserEvents(): Promise<IUserEventRemoveResponse> {
    return this.apiClient.makeRequest('/user/all_events', {
      method: 'DELETE',
    });
  }

  public getStatusUserAPI(): Promise<IUserEventRemoveResponse> {
    return this.apiClient.makeRequest('/user/status');
  }
}
