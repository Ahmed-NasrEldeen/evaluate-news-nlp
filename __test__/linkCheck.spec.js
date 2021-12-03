import { validUrl } from "../src/client/js/checkValidUrl";

describe("testing validurl", () => {
  test("check function is defined", () => {
    expect(validUrl).toBeDefined();
  });
  test("check valid url", () => {
    expect(validUrl("https://www.google.com/")).toBeTruthy();
  });
  test("check invalid url", () => {
    expect(validUrl("not valid url")).toBeFalsy();
  });
  test("check invalid url", () => {
    expect(validUrl("www.google.com")).toBeFalsy();
  });
});
