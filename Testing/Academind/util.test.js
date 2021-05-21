const { generateText, checkAndGenerate } = require("./util");
const puppeteer = require("puppeteer");

test("unit test", () => {
  expect(generateText("Prabhu", 22)).toBe("Prabhu (22 years old)");
  expect(generateText("", null)).toBe(" (null years old)");
  expect(generateText("Ammu", 18)).toBe("Ammu (18 years old)");
});

test("Integration test", () => {
  expect(checkAndGenerate("Prabhu", 22)).toBe("Prabhu (22 years old)");
});

test("end to end", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1300,700"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///D:/Web%20Dev/JavaScript/JavaScript-Fundamentals/Testing/Academind/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Prabhu");
  await page.click("input#age");
  await page.type("input#age", "22");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Prabhu (22 years old)");
}, 10000);
