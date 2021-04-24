// const licenseMIT = {
//   name: "MIT license",
//   shieldURL: "https://img.shields.io/badge/License-MIT-blue.svg",
//   licenseURL: "https://lbesson.mit-license.org/"
// }
// const licenseGPL = {
//   name: "GPLv3 license",
//   shieldURL: "https://img.shields.io/badge/License-GPLv3-blue.svg",
//   licenseURL: "http://perso.crans.org/besson/LICENSE.html"
// }
// const licenseCC0 = {
//   name: "CC-0 license",
//   shieldURL: "https://img.shields.io/badge/License-CC--0-blue.svg",
//   licenseURL: "https://creativecommons.org/licenses/by-nd/4.0"
// }

// const licenseChoices = [licenseMIT, licenseGPL, licenseCC0];
const badgeMIT = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
const badgeGPL = "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
const badgeCC0 = "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case "MIT": return badgeMIT;
    case "GPL": return badgeGPL;
    case "CC-0": return badgeCC0;
    default: return "";
  }
};

function renderLicenseName(license) {
  switch (license){
    case "MIT": return "MIT license";
    case "GPL": return "GPLv3 license";
    case "CC-0": return "CC-0 license";
    default: return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} #

${renderLicenseBadge(data.license)}

## Description ##
----------------------------------------
${data.description}


## Table of Contents ##
-----------------------------------------
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)


## Installation ##
------------------------------------------
To install necessary dependencies, run the following command:
>${data.dependencies}


## Usage ##
------------------------------------------
${data.usage}


## License ##
------------------------------------------
This project is licensed under the ${renderLicenseName(data.license)} license.


## Contributing ##
-----------------------------------------
${data.contributions}


## Tests ##
-----------------------------------------
To run tests, run the following command:
>${data.test}


## Questions ##
----------------------------------------
If you have any questions about the repo, open an issue or contact me directly at ${data.email}
You can find more of my work at **[${data.github}](https://github.com/${data.github})**





`;
}

module.exports = generateMarkdown;