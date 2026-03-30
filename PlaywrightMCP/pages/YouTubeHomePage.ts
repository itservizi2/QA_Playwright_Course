import { expect, type Locator, type Page } from '@playwright/test';

export class YouTubeHomePage {
  private readonly page: Page;
  private readonly consentButton: Locator;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.consentButton = this.page
      .getByRole('button', { name: /accept all|i agree|agree to all/i })
      .first();
    this.searchInput = this.page
      .locator('input[name="search_query"], input#search, input.ytSearchboxComponentInput')
      .first();
    this.searchButton = this.page.getByRole('button', { name: /^search$/i }).first();
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://www.youtube.com/');
  }

  async acceptConsentIfVisible(): Promise<void> {
    const isVisible = await this.consentButton.isVisible({ timeout: 5000 }).catch(() => false);
    if (isVisible) {
      await this.consentButton.click();
    }
  }

  async searchFor(term: string): Promise<void> {
    await expect(this.searchInput).toBeVisible({ timeout: 15000 });
    await this.searchInput.fill(term);

    const canClickSearch = await this.searchButton.isVisible({ timeout: 3000 }).catch(() => false);
    if (canClickSearch) {
      await this.searchButton.click();
    } else {
      await this.searchInput.press('Enter');
    }

    await this.page.waitForURL(/results\?search_query=/i, { timeout: 15000 });
  }
}
