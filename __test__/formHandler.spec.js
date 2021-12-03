import { handleSubmit } from "../src/client/js/formHandler";

describe("testing formHandler file", () => {
  test("check function is defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
