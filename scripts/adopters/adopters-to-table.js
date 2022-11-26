const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const adoptersDocsFilePath = path.join(process.cwd(), 'docs', 'adopters.md');

function getAdoptersTable() {
  const adopters = yaml.load(fs.readFileSync(path.join(process.cwd(), 'adopters.yaml'), 'utf-8'));
  return adopters.map((adopter) => {
    const { organization, website, description } = adopter;
    return `|[${organization}](${website})|${description}|`;
  }).join('\n');
}

const adoptersContentTable = `<!-- ADOPTERS BELOW THIS POINT -->
|Organizations|Description of Use|
|---|---|
${getAdoptersTable()}
<!-- ADOPTERS ABOVE THIS POINT -->`;

const adoptersContentFile = fs.readFileSync(adoptersDocsFilePath, 'utf-8');

fs.writeFileSync(
  adoptersDocsFilePath,
  adoptersContentFile.replace(/<!-- ADOPTERS BELOW THIS POINT -->\n(.|\n)*\n<!-- ADOPTERS ABOVE THIS POINT -->/m, adoptersContentTable),
);
