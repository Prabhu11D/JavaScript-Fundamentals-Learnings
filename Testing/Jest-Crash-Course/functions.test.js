const { functions, fullName, fetchUser } = require("./functions");

// beforeEach(() => atFirst());
// afterEach(() => atLast());

// beforeAll(() => console.log("----------- STARTING TESTING ------------"));
// afterAll(() => console.log("----------- ENDING TESTING ------------"));

// const atFirst = () => console.log("Start Testing");
// const atLast = () => console.log("End Testing");

describe("Checking Names", () => {
  beforeEach(() => console.info("Checking Names ......................."));

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Add 2+2 be equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2+2 is not to be 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("1-1 to be 0", () => {
  expect(functions.sub(1, 1)).toBe(0);
});

test("fullName -> Prabhu Deva", () => {
  expect(fullName("prabhu", "deva")).toBe("Prabhu Deva");
});

//  --------- toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// ---------- toBefalsy
test("Should be Falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
test("Should be Falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// ---------- toEqual
test("Should be Prabhu Deva Object", () => {
  expect(functions.admin()).toEqual({
    firstname: "Prabhu",
    lastname: "Deva",
  });
});

// ============= Less than or Greater than
test("Should be less than 500", () => {
  expect(100 + 100).toBeLessThanOrEqual(500);
});

// =============== RegExp
test("Name Should not contain P", () => {
  expect("Ammu").not.toMatch(/P/);
});

// ============== Array
test("Admin name in the DataBase", () => {
  let Admin = "John";
  let usernames = ["Prabhu", "John", "Vignesh", "Jai Surya"];

  expect(usernames).toContain(Admin);
});

// ============ Working with Async data
test("User name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
