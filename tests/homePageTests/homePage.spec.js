const { test, expect } = require('@playwright/test');

test('Home page test', async ({ browser }) => {
    const context = await browser.newContext();

    await context.tracing.start(
        {
            screenshots: true, snapshots: true
        }
    );

    const page = await context.newPage();

    await page.goto('http://localhost:3000/');
    const title = page.locator('xpath=/html/head/title');
    await expect(title).toHaveText('React App');

    await context.tracing.stop({ path: 'trace.zip' });
});
