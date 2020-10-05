export const BASE_URL = 'https://api.mobimobi.tech/v2';

export class Api {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public makeRequest = <T>(url: string, options?: RequestInit | undefined): Promise<T> => {
    return new Promise((resolve, reject) => {
      const request = fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${this.token}`,
        },
      });

      request.then((response: Response) => {
        if (!response) {
          throw new Error('[Mobimobi] undefined request');
        }

        return resolve(response.json());
      }).catch((error: Error) => {
        reject(error);
      });
    })
  };
}
