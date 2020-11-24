import { Client as MobiClient } from "mobimobi-client-js";

const client = new MobiClient("testtoken");

/** Add new user event */
const newUserEvent = {
  user_id: "USER8833",
  event_type: "PRODUCT_VIEW",
  event_platform: "ANDROID",
  product_id: "SKU-5599",
  product_quantity: 0,
  basket_items: [
    {
      product_id: "SKU-5599",
      product_quantity: 2
    },
    {
      product_id: "SKU-9449",
      product_quantity: 6
    }
  ],
  date: "2020-05-12 14:12:42"
};

client.user
  .addUserEvent(newUserEvent)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

/** Remove all user events */
client.user
  .removeAllUserEvents()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));
