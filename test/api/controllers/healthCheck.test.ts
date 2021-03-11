import * as request from "supertest";

import app from "../../../src/app";

describe("GET /health", () => {
  let response = null;
  beforeAll(async () => {
    response = await request(app).get("/health");
  });

  it("status is 200", () => {
    expect(response.status).toBe(200);
  });
  it("response has uptime property", () => {
    expect(response.body).toHaveProperty("uptime", expect.any(Number));
  });
});
