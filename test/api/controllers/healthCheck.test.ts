import * as request from 'supertest';

import app from '../../../src/app';

describe('GET /health', () => {
  let response: request.Response;
  beforeAll(async () => {
    response = await request(app).get('/health');
  });

  it('status is 200', () => {
    expect((<request.Response>response).status).toBe(200);
  });
  it('response has uptime property', () => {
    expect((<request.Response>response).body).toHaveProperty(
      'uptime',
      expect.any(Number)
    );
  });
});
