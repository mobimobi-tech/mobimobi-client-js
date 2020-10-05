import { Api } from '../Api';

import { IMetricData, IGetMetricParams } from './interfaces';

export class Metrics {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  public getMetric(params: IGetMetricParams): Promise<IMetricData> {
    const metricNames = params.metric_names.join(',');

    let urlParams = `${metricNames}&from=${params.from}`;

    if (params.base) {
      urlParams += `&base=${params.base}`;
    }

    return this.apiClient.makeRequest(`/metrics/${urlParams}`);
  }
}
