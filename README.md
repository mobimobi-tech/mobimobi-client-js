# Mobimobi JS Client

The best way to integrate Mobimobi within your JavaScript project

## Features

- Easyliy interaction with Mobimobi API
- Works both on the **browser** and **node.js**
- Built with TypeScript

---

# Installation

Install client package with npm

```bash
npm install mobimobi-client-js
```

or with yarn

```bash
yarn add mobimobi-client-js
```

---

## Usage

```javascript
/** Import JS Mobimobi client */
import { Client as MobiClient } from 'mobimobi-client-js';

/** Init client */
const mobiClient = new MobiClient(<YOUR_CLIENT_TOKEN>);

/** Use it */
mobiClient.catalog.getStatus().then((response) => {
    console.log(response)
}).catch((err) => console.error(err));
```

---

## Usage examples

https://codesandbox.io/s/mobi-mobi-js-client-examples-1gf0j

---

## Docs [WIP]

[See docs](https://github.com/mobimobi-tech/mobimobi-client-js/blob/master/docs/docs_openapi_mobi-api-v2-en.yaml) for more details and API.

---

## Troubleshooting

If you have some issues with using library you can create and describe problem on issues page (https://github.com/mobimobi-tech/mobimobi-client-js/issues)
