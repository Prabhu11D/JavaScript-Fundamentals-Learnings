const reverseString = require("./reverseString");

test("reverseString method is defined", () => {
  expect(reverseString).toBeDefined();
});

test("String Reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String Reverse with Capital Letter", () => {
  expect(reverseString("HeLlo")).toEqual("olleh");
});
