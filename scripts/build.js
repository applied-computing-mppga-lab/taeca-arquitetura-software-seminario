const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');
const inputFile = path.join(srcDir, 'index.html');
const outputFile = path.join(distDir, 'index.html');

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function inlineAsset(html, assetPath, tag) {
  const asset = read(path.join(srcDir, assetPath));
  return html.replace(tag, tag.includes('stylesheet')
    ? `<style>${asset}</style>`
    : `<script>${asset}</script>`);
}

function build() {
  let html = read(inputFile);

  html = html.replace(
    /<link rel="stylesheet" href="style\.css">/i,
    `<style>${read(path.join(srcDir, 'style.css'))}</style>`
  );

  html = html.replace(
    /<script src="app\.js"><\/script>/i,
    `<script>${read(path.join(srcDir, 'app.js'))}</script>`
  );

  fs.writeFileSync(outputFile, html, 'utf8');
  console.log(`Bundle criado em ${path.relative(rootDir, outputFile)}`);
}

build();
