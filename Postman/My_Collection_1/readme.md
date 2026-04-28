npm install -g newman
npm install -g newman-reporter-htmlextra
npx playwright install
npm install @playwright/test


newman run My_Collection_1.json -r cli,json,html

