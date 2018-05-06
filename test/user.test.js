"use strict";

const supertest = require("supertest");
const server = require("../app/server");

describe("users", () => {
  const request = supertest(server.listen());

  describe(`GET /v1/users`, () => {
    it("it should always return 200", async () => {
      const res = await request
        .get("/v1/users")
        .expect("Content-Type", /json/)
        .expect(200);
      console.log(res.body);
      expect(res.body).toEqual({});
    });

    it("it should return {user: zhu} }", async () => {
      const res = await request
        .get(`/v1/users?user=zhu`)
        .expect("Content-Type", /json/)
        .expect(200);
      expect(res.body.user).toBe("zhu");
    });
  });
});
