import { Client as MobiClient } from "mobimobi-client-js";

const client = new MobiClient("testtoken");

/** Get APIs statuses */
client.catalog
  .getStatus()
  .then((res) => {
    document.getElementById("catalog_status").innerHTML = `
      <pre>Catalog API status: ${res.status}</pre>
    `;
  })
  .catch((err) => console.error(err));

client.user
  .getStatus()
  .then((res) => {
    document.getElementById("user_status").innerHTML = `
      <pre>User API status: ${res.status}</pre>
    `;
  })
  .catch((err) => console.error(err));

client.search
  .getStatus()
  .then((res) => {
    document.getElementById("search_status").innerHTML = `
      <pre>Search API status: ${res.status}</pre>
    `;
  })
  .catch((err) => console.error(err));

client.metrics
  .getStatus()
  .then((res) => {
    document.getElementById("metrics_status").innerHTML = `
      <pre>Metrics API status: ${res.status}</pre>
    `;
  })
  .catch((err) => {
    document.getElementById("metrics_status").innerHTML = `
      <pre>Metrics API status: ${JSON.stringify(err)}</pre>
    `;
  });
