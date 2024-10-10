import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('user@nextmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByText('AcmePlease log in to continue').click();
  await page.locator('div').filter({ hasText: 'Acme' }).nth(1).click();
  await page.locator('svg').first().click();
  await page.getByText('Acme').click();
  await page.getByText('Email').click();
  await page.getByText('Password').click();
  await page.getByRole('heading', { name: 'Please log in to continue.' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
});