const should = require("chai").should();

import {
  toQueryParam,
  toQueryString,
  getQueryParam,
  getQueryParams,
} from "./url";

describe("URL module", () => {

  const query = "?param1=TEST&param2=%3Dtest&";
  const object = { param1: "TEST", param2: "=test" };

  describe("getQueryParam()", () => {

    it("should return value for existing param", () => {
      getQueryParam(query, "param1").should.equal("TEST");
    });

    it("should return undefined for missing param", () => {
      should.equal(getQueryParam(query, "xxx"), undefined);
    });

    it("should return unencoded value for existing param", () => {
      getQueryParam(query, "param2").should.equal("=test");
    });
  });

  describe("getQueryParams()", () => {

    it("should return all params", () => {
      const params = getQueryParams(query);
      params.should.deep.equal(object);
    });
  });

  describe("toQueryString()", () => {

    it("should return encoded query string", () => {
      const queryString = "?" + toQueryString(object) + "&";
      queryString.should.equal(query);
    });
  });

  describe("toQueryParam()", () => {

    it("should return encoded query param", () => {
      const input = { TEST: "=test" };
      const output = "%7B%22TEST%22%3A%22%3Dtest%22%7D";
      toQueryParam(input).should.equal(output);
    });
  });

});
