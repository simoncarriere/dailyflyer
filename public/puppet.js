const puppeteer = require("puppeteer");

const url =
  "https://www.amazon.com/dp/B07XYPVFCH/ref=s9_acsd_simh_hd_bw_b1B76_c2_x_2_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=RC7FZPYERHQ5527A68PX&pf_rd_t=101&pf_rd_p=cfeb90af-4c28-4a4b-9ea9-a8ace453d07e&pf_rd_i=281052";

(async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Scrape Price, eval takes a function
  const title = await page
    .$eval("#productTitle", (el) => el.innerHTML.trim())
    .catch(console.error);
  console.log(title);

  const currentPrice = await page
    .$eval("#priceblock_ourprice", (el) => el.innerHTML.trim())
    .catch(console.error);
  console.log(currentPrice);

  await browser.close();
})();
