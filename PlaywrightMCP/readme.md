In this Playwright MCP project we serach on Youtube for Ricky Martin Private emotion song

Use these commands from QA_Playwright_Course\PlaywrightMCP:

Chromium:
npx playwright test tests/youtube-search.spec.ts --project=chromium --reporter=line

Firefox:
npx playwright test tests/youtube-search.spec.ts --project=firefox --reporter=line

WebKit:
npx playwright test tests/youtube-search.spec.ts --project=webkit --reporter=line

All 3 browsers in one command:
npx playwright test tests/youtube-search.spec.ts --project=chromium --project=firefox --project=webkit --reporter=line

Tests are passing but i did not actually see any browser open, how come?
That is expected behavior.

By default, Playwright runs in headless mode, so browsers run in the background without opening visible windows.

If you want to see the browser UI, run in headed mode:

Chromium:
npx playwright test tests/youtube-search.spec.ts --project=chromium --headed --reporter=line

Firefox:
npx playwright test tests/youtube-search.spec.ts --project=firefox --headed --reporter=line

WebKit:
npx playwright test tests/youtube-search.spec.ts --project=webkit --headed --reporter=line

If you want to step through actions slowly, use debug mode:
npx playwright test tests/youtube-search.spec.ts --project=chromium --debug

npx playwright test tests/youtube-search.spec.ts --project=chromium --reporter=line