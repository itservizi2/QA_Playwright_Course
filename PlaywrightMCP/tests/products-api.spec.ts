import { test, expect } from '@playwright/test';

test('GET /products returns valid product list', async ({ request }) => {
  const endpoint = 'https://api.escuelajs.co/api/v1/products';

  const response = await request.get(endpoint);
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBeTruthy();
  expect(responseBody.length).toBeGreaterThan(0);

  const requiredKeys = ['id', 'title', 'slug', 'price', 'category', 'description'];

  for (const product of responseBody) {
    for (const key of requiredKeys) {
      expect(product, `Missing required key: ${key}`).toHaveProperty(key);
    }
  }

  // Optional JSON Schema validation with Ajv if the dependency is available.
  let AjvConstructor: any;
  try {
    const ajvModule = await import('ajv');
    AjvConstructor = ajvModule.default;
  } catch {
    AjvConstructor = null;
  }

  if (AjvConstructor) {
    const ajv = new AjvConstructor({ allErrors: true, strict: false });

    const productSchema = {
      type: 'object',
      required: requiredKeys,
      properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        slug: { type: 'string' },
        price: { type: 'number' },
        category: { type: 'object' },
        description: { type: 'string' },
      },
      additionalProperties: true,
    };

    const schema = {
      type: 'array',
      minItems: 1,
      items: productSchema,
    };

    const validate = ajv.compile(schema);
    const isValid = validate(responseBody);

    expect(isValid, JSON.stringify(validate.errors, null, 2)).toBeTruthy();
  }

  const previewCount = Math.min(responseBody.length, 10);
  console.log(`Total products returned: ${responseBody.length}`);
  console.log(`Logging first ${previewCount} products (title and price):`);

  for (const product of responseBody.slice(0, previewCount)) {
    console.log(`Product: ${product.title} | Price: ${product.price}`);
  }
});
