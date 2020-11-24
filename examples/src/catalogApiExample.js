import { Client as MobiClient } from "mobimobi-client-js";

const client = new MobiClient("testtoken");

const newProduct = {
  product_id: "Red T-Shirt XL",
  product_group_id: "T-Shirt",
  title: "Red T-Shirt XL",
  brand: "Some brand",
  price: "12.00",
  currency: "USD",
  is_searchable: true,
  is_recommendable: true,
  categories: ["Cosmetics", "Perfume"],
  color: "Red",
  size: "X-Large",
  available_from: "2020-05-12 14:12:42",
  available_until: "2021-05-12 14:12:42",
  description: "Some cool description",
  sale_price: "9.99",
  on_sale_from: "2021-05-12 14:12:42",
  on_sale_until: "2021-05-12 23:59:59",
  tags: ["exclusive", "face"],
  age_group: "adult",
  gender: "unisex"
};

/** Add new product */
client.catalog
  .addProduct(newProduct)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

/** Updaate product */
client.catalog
  .updateProduct(newProduct)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

/** Remove product */
client.catalog
  .removeProduct(newProduct.product_id)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

/** Remove all products */
client.catalog
  .removeAllProducts(newProduct.product_id)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));

/** Get product */
client.catalog
  .getProduct(newProduct.product_id)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));
