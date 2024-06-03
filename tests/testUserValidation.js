const { expect } = require("chai");
const UserValidation = require("../src/userValidation");

describe("UserValidation", function () {
  it("should validate that all FanCode city users have more than 50% tasks completed", async function () {
    try {
      await UserValidation.validateFanCodeUsers();
    } catch (error) {
      expect.fail(error.message);
    }
  });
});
