import { Client as MobiClient } from "mobimobi-client-js";

const client = new MobiClient("testtoken");

/** Exequte search */
client.search.search({
  q: "Query string",
  user_id: "12345",
  num: 10,
  brands: ["some brand"],
  full_product_info: "yes"
});
