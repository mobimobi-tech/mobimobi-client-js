import { Client as MobiClient } from "mobimobi-client-js";

const client = new MobiClient("testtoken");

const baseParams = {
  user_id: "USER_ID",
  num: 15,
  brands: "Some brand",
  categories: "Some category",
  full_product_info: "yes",
  complete_with_most_popular: "yes",
  exclude_sold: "no",
  exclude_added_to_basket: "no",
  exclude_added_to_wishlist: "yes"
};

const recentlyViewedParams = {
  user_id: "USER_ID",
  num: 15,
  full_product_info: "yes",
  exclude_sold: "no",
  exclude_added_to_basket: "no",
  exclude_added_to_wishlist: "yes"
};

const mostPopularParams = {
  user_id: "USER_ID",
  num: 15,
  brands: "Some brand",
  categories: "Some category",
  full_product_info: "yes",
  exclude_sold: "no",
  exclude_added_to_basket: "no",
  exclude_added_to_wishlist: "yes"
};

/** Get Personalized Recommendations */
client.recommendations
  .getPersonalizedRecommendations(baseParams)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

/** Get Most Popular Recommendations */
client.recommendations
  .getMostPopularRecommendations(mostPopularParams)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

/** Get Basket Recommendations */
client.recommendations
  .getBasketRecommendations(baseParams)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

/** Get Similar Recommendations */
client.recommendations
  .getSimilarRecommendations(baseParams)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

/** Get Zoned Recommendations */
client.recommendations
  .getZonedRecommendations(baseParams)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

/** Get Recently Viewed Recommendations */
client.recommendations
  .getRecentlyViewedRecommendations(recentlyViewedParams)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
