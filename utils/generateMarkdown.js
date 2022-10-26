const getLicense = require('./getBadge.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl = getLicense(license)?.badgeUrl;
  if (badgeUrl) {
    return `![${license}](${badgeUrl})`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseUrl = getLicense(license)?.licenseUrl;
  if (licenseUrl) {
    return `[${license}](${licenseUrl})`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}
  <br />
✉️ Email me with any questions: ${data.email}<br />`;
}

module.exports = generateMarkdown;