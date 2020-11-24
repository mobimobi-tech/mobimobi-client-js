import { Client as MobiClient } from "mobimobi-client-js";

const client = new MobiClient("testtoken");

/** Get metric */
client.metrics.getMetric({
  metric_names: ["events.action.create"],
  base: "M",
  from: "2020-01-01 00:00:00"
});
