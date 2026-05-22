import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('abc@gmail.com');
  await page.waitForTimeout(2000)
  await page.getByRole('textbox', { name: 'Password' }).fill('abc123');
  await page.waitForTimeout(2000)
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000)
});