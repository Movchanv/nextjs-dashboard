import { users } from "@/app/lib/placeholder-data";
import { Page } from "@playwright/test";

const loginTestBase = async (page : Page) => {
    await page.goto('/login');
    await page.getByPlaceholder('Enter your email address').click();
    await page.getByPlaceholder('Enter your email address').fill(users[0].email);
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill(users[0].password);
    await page.getByRole('button', { name: 'Log in' }).click();
};

export default loginTestBase;