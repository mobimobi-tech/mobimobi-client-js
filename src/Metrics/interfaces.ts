export interface IMetricDataValue {
  [key: string]: Array<Array<string | number>>;
}

export interface IMetricData {
  "metrics": string[];
  "now_ts": number;
  "now": string;
  "from_ts": number;
  "from": string;
  "points": number;
  "base": number;
  "values": IMetricDataValue;
}


export interface IGetMetricParams {
  metric_names: string[];
  base?: string;
  from: string;
}
