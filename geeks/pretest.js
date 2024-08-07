// pretest.js
const puppeteer = require('puppeteer');
const fs = require('fs');

const chromePath = puppeteer.executablePath();
const envContent = `CHROME_BIN=${chromePath}\n`;

fs.writeFileSync('.env', envContent, { encoding: 'utf8' });

console.log(`CHROME_BIN is set to: ${chromePath}`);
