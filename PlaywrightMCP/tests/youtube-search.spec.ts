import { test, expect } from '@playwright/test';
import { YouTubeHomePage } from '../pages/YouTubeHomePage';
import { YouTubeResultsPage } from '../pages/YouTubeResultsPage';

test('searches YouTube for Ricky Martin - Private Emotion and verifies matching songs are listed', async ({ page }) => {
  const youtubeHomePage = new YouTubeHomePage(page);
  const youtubeResultsPage = new YouTubeResultsPage(page);

  await youtubeHomePage.navigateToHomePage();
  await youtubeHomePage.acceptConsentIfVisible();
  await youtubeHomePage.searchFor('Ricky Martin - Private Emotion');

  const matchingSongs = await youtubeResultsPage.getMatchingSongResults('Ricky Martin - Private Emotion');
  await expect(matchingSongs.first()).toBeVisible({ timeout: 15000 });

  const resultsCount = await matchingSongs.count();
  expect(resultsCount).toBeGreaterThan(0);
});
