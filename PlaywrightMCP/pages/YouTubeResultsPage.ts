import { type Locator, type Page } from '@playwright/test';

export class YouTubeResultsPage {
  private readonly page: Page;
  private readonly videoRenderers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.videoRenderers = this.page.locator('ytd-video-renderer, ytd-compact-video-renderer');
  }

  async getMatchingSongResults(songTitle: string): Promise<Locator> {
    return this.videoRenderers.filter({
      hasText: new RegExp(songTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'),
    });
  }
}
