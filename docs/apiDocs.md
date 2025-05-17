# V2 Demo API Documentation

## Base URL

All API endpoints should be prefixed with the following base URL:

```
https://nodejs-server-mongodb-xx12x3-toystore.vercel.app
```

The `/v2` endpoints provide a stateless, public, demo-friendly API for prototyping and frontend development. These endpoints use fake or template-based data, with some (like store and product schema creation) persisting demo data in MongoDB.

## Table of Contents

- [Store Endpoints](#store-endpoints)
  - [Create a Demo Store](#create-a-demo-store)
  - [Get a Store](#get-a-store)
  - [Generate a Store Schema](#generate-a-store-schema)
- [Product Endpoints](#product-endpoints)
  - [Create a Fake Product](#create-a-fake-product)
  - [Get a Product](#get-a-product)
  - [Generate and Persist a Product Schema](#generate-and-persist-a-product-schema)
  - [Get Product List](#get-product-list)
- [Cart Endpoints](#cart-endpoints)
  - [Create a Cart](#create-a-cart)
  - [Get a Cart](#get-a-cart)
- [Order Endpoints](#order-endpoints)
  - [Create an Order](#create-an-order)
  - [Get an Order](#get-an-order)
- [Frontend Integration Flow](#frontend-integration-flow)

## Store Endpoints

### Create a Demo Store

Creates a demo store that is persisted in MongoDB.

**Endpoint**: `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/store`

**Request Body**:

```json
{
  "name": "Demo Store",
  "subdomain": "demo-store",
  "description": "A fake store for testing",
  "template": "default",
  "schemaPrompt": "Create a schema for a demo store with basic fields"
}
```

**Required Fields**:

- `name`: The name of the store
- `subdomain`: A unique subdomain for the store

**Optional Fields**:

- `description`: A description of the store
- `template`: The template to use (defaults to "default")
- `schemaPrompt`: A prompt for schema generation (not used in current implementation)

**Response (201 Created)**:

```json
{
  "_id": "665f1e2b2f8b2c001e8e4a1a",
  "name": "Demo Store",
  "subdomain": "demo-store-timestamp",
  "description": "A fake store for testing",
  "status": "creating",
  "template": "default",
  "createdAt": "2024-06-01T12:00:00.000Z",
  "updatedAt": "2024-06-01T12:00:00.000Z"
}
```

**Status Codes**:

- `201 Created`: Store created successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Server-side error

**Notes**:

- The store status is initially set to "creating" and will be updated to "ready" after a short delay
- The subdomain will be made unique by appending a timestamp

---

### Get a Store

Returns store information. If the ID matches an existing store in MongoDB, returns that store. Otherwise, returns fake store data.

**Endpoint**: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/store/:id`

**URL Parameters**:

- `id`: The ID of the store

**Response (200 OK)**:

```json
{
  "id": "665f1e2b2f8b2c001e8e4a1a",
  "name": "Demo Store",
  "subdomain": "demo-store",
  "description": "A fake store for testing",
  "status": "ready",
  "template": "default"
}
```

**Status Codes**:

- `200 OK`: Store found or fake store generated
- `500 Internal Server Error`: Server-side error

---

### Generate a Store Schema

Generates a schema for a store based on the provided prompt. This endpoint does not persist data.

**Endpoint**: `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/store/schema`

**Request Body**:

```json
{
  "prompt": "Create a schema for a clothes store with name, description, and logo fields"
}
```

**Required Fields**:

- `prompt`: A text description of the desired schema

**Response (200 OK)**:

```json
{
  "prompt": "Create a schema for a clothes store with name, description, and logo fields",
  "schema": {
    "name": { "type": "String", "required": true },
    "subdomain": { "type": "String", "required": true },
    "description": { "type": "String" },
    "status": { "type": "String" },
    "template": { "type": "String" }
  },
  "generatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Status Codes**:

- `200 OK`: Schema generated successfully
- `400 Bad Request`: Missing prompt
- `500 Internal Server Error`: Server-side error

---

## Product Endpoints

### Create a Fake Product

Creates a fake product (not persisted in the database).

**Endpoint**: `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product`

**Request Body**:

```json
{
  "name": "Demo T-Shirt",
  "price": 19.99
}
```

**Required Fields**:

- `name`: The name of the product

**Optional Fields**:

- `price`: The price of the product (defaults to 19.99)

**Response (201 Created)**:

```json
{
  "id": "uuid",
  "name": "Demo T-Shirt",
  "price": 19.99,
  "description": "A fantastic demo t-shirt",
  "stock": 50,
  "category": "Clothing",
  "images": [
    {
      "url": "https://random-image-pepebigotes.vercel.app/api/random-image",
      "alt": "Demo T-Shirt",
      "isPrimary": true
    }
  ]
}
```

**Status Codes**:

- `201 Created`: Product created successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Server-side error

---

### Get a Product

Returns a fake product based on the provided ID.

**Endpoint**: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product/:id`

**URL Parameters**:

- `id`: The ID of the product

**Response (200 OK)**:

```json
{
  "id": "requested-id",
  "name": "Demo T-Shirt",
  "price": 19.99,
  "description": "A comfortable cotton t-shirt",
  "stock": 50,
  "category": "Clothing",
  "images": [
    {
      "url": "https://random-image-pepebigotes.vercel.app/api/random-image",
      "alt": "T-shirt",
      "isPrimary": true
    }
  ]
}
```

**Status Codes**:

- `200 OK`: Product returned
- `500 Internal Server Error`: Server-side error

---

### Generate and Persist a Product Schema

Generates and persists a product schema for a store in MongoDB.

**Endpoint**: `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product/schema`

**Request Body**:

```json
{
  "storeId": "665f1e2b2f8b2c001e8e4a1a",
  "prompt": "Create a schema for demo products with name, price, and description"
}
```

**Required Fields**:

- `storeId`: The ID of the store this product schema belongs to
- `prompt`: A text description of the desired schema

**Response (201 Created)**:

```json
{
  "_id": "665f1e2b2f8b2c001e8e4a1b",
  "storeId": "665f1e2b2f8b2c001e8e4a1a",
  "prompt": "Create a schema for demo products with name, price, and description",
  "schemaDefinition": {
    "name": { "type": "String", "required": true },
    "price": { "type": "Number", "required": true },
    "description": { "type": "String" }
  },
  "fields": ["name", "price", "description"],
  "version": 1,
  "generatedAt": "2024-06-01T12:00:00.000Z",
  "createdAt": "2024-06-01T12:00:00.000Z",
  "updatedAt": "2024-06-01T12:00:00.000Z"
}
```

**Status Codes**:

- `201 Created`: Product schema created successfully
- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Server-side error

**Notes**:

- If MongoDB is not connected, or if there's an error saving to the database, a fake schema will be returned

---

### Get Product List

Returns a list of demo products with optional filtering.

**Endpoint**: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/products`

**Query Parameters**:

- `limit` (optional): Maximum number of products to return (1-20, default: 10)
- `category` (optional): Filter products by category (e.g., "Clothing", "Electronics", "Home")

**Response (200 OK)**:

```json
{
  "products": [
    {
      "id": "uuid",
      "name": "Classic T-Shirt",
      "price": 19.99,
      "description": "A comfortable cotton t-shirt perfect for everyday wear",
      "stock": 120,
      "category": "Clothing",
      "images": [
        {
          "url": "https://random-image-pepebigotes.vercel.app/api/random-image",
          "alt": "Classic T-Shirt",
          "isPrimary": true
        }
      ],
      "rating": 4.5
    },
    {
      "id": "uuid",
      "name": "Wireless Earbuds",
      "price": 89.99,
      "description": "True wireless earbuds with noise cancellation",
      "stock": 68,
      "category": "Electronics",
      "images": [
        {
          "url": "https://random-image-pepebigotes.vercel.app/api/random-image",
          "alt": "Wireless Earbuds",
          "isPrimary": true
        }
      ],
      "rating": 4.3
    }
  ],
  "count": 2,
  "total": 30
}
```

**Status Codes**:

- `200 OK`: Products returned successfully
- `500 Internal Server Error`: Server-side error

**Example Requests**:

- Get 5 products: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/products?limit=5`
- Get products in Electronics category: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/products?category=Electronics`
- Get 15 products in Home category: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/products?limit=15&category=Home`

---

## Cart Endpoints

### Create a Cart

Creates a fake shopping cart (not persisted).

**Endpoint**: `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/cart`

**Request Body**:

```json
{
  "items": [
    {
      "productId": "uuid",
      "name": "Demo T-Shirt",
      "price": 19.99,
      "quantity": 2
    }
  ]
}
```

**Required Fields**:

- `items`: An array of items in the cart

**Response (201 Created)**:

```json
{
  "id": "uuid",
  "items": [
    {
      "productId": "uuid",
      "name": "Demo T-Shirt",
      "price": 19.99,
      "quantity": 2,
      "image": "https://random-image-pepebigotes.vercel.app/api/random-image"
    }
  ],
  "total": 39.98,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Status Codes**:

- `201 Created`: Cart created successfully
- `400 Bad Request`: Missing items array
- `500 Internal Server Error`: Server-side error

---

### Get a Cart

Returns a fake shopping cart based on the provided ID.

**Endpoint**: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/cart/:id`

**URL Parameters**:

- `id`: The ID of the cart

**Response (200 OK)**:

```json
{
  "id": "requested-id",
  "items": [
    {
      "productId": "uuid",
      "name": "Demo T-Shirt",
      "price": 19.99,
      "quantity": 2,
      "image": "https://random-image-pepebigotes.vercel.app/api/random-image"
    }
  ],
  "total": 39.98,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Status Codes**:

- `200 OK`: Cart returned
- `500 Internal Server Error`: Server-side error

---

## Order Endpoints

### Create an Order

Creates a fake order (not persisted).

**Endpoint**: `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/order`

**Request Body**:

```json
{
  "items": [
    {
      "productId": "uuid",
      "name": "Demo T-Shirt",
      "price": 19.99,
      "quantity": 2
    }
  ]
}
```

**Required Fields**:

- `items`: An array of items in the order

**Response (201 Created)**:

```json
{
  "id": "uuid",
  "items": [
    {
      "productId": "uuid",
      "name": "Demo T-Shirt",
      "price": 19.99,
      "quantity": 2
    }
  ],
  "total": 39.98,
  "status": "paid",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Status Codes**:

- `201 Created`: Order created successfully
- `400 Bad Request`: Missing items array
- `500 Internal Server Error`: Server-side error

---

### Get an Order

Returns a fake order based on the provided ID.

**Endpoint**: `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/order/:id`

**URL Parameters**:

- `id`: The ID of the order

**Response (200 OK)**:

```json
{
  "id": "requested-id",
  "items": [
    {
      "productId": "uuid",
      "name": "Demo T-Shirt",
      "price": 19.99,
      "quantity": 2
    }
  ],
  "total": 39.98,
  "status": "paid",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Status Codes**:

- `200 OK`: Order returned
- `500 Internal Server Error`: Server-side error

---

## Frontend Integration Flow

### 1. Store Creation and Schema Setup

- **Step 1:** Call `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/store` to create a demo store. Save the returned `_id` as your `storeId`.
- **Step 2:** (Optional) Call `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/store/schema` with a prompt to get a demo schema for the store.
- **Step 3:** Call `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product/schema` with the `storeId` and a prompt to generate and persist a demo product schema.

### 2. Product Management

- **Step 4:** Call `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product` to create demo products for your store (for UI prototyping).
- **Step 5:** Use `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product/:id` to fetch product details for display.
- **Step 6:** Use `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/products` to get a list of products, optionally filtered by category.

### 3. Cart Flow

- **Step 7:** When a user adds a product to the cart, call `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/cart` with the product info.
- **Step 8:** Use `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/cart/:id` to retrieve the cart for the session (simulate with a UUID).

### 4. Order Flow

- **Step 9:** When a user checks out, call `POST https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/order` with the cart items.
- **Step 10:** Use `GET https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/order/:id` to fetch order details for confirmation.

### Integration Tips

- All endpoints are public and require no authentication.
- You can use random UUIDs for cart/order IDs to simulate multiple sessions.
- For a real app, switch to the main API endpoints once development is complete.
- Use the persisted store and product schema endpoints to test dynamic forms or product detail pages.
- The server will fall back to returning fake data if MongoDB operations fail, ensuring your frontend development can continue even if there are database issues.
