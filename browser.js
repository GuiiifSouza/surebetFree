const { firefox } = require('playwright');

async function launchBrowser() {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  return page;
}

module.exports = {
  launchBrowser
}
