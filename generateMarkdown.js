// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
    if (license === 'MIT') {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'Apache') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    } else if (license === 'GPL') {
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } 
    return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if (license === 'MIT') {
        licenseLink = `${renderLicenseBadge(license)}(https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache') {
        licenseLink = `${renderLicenseBadge(license)}(https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL') {
        licenseLink = `${renderLicenseBadge(license)}(https://www.gnu.org/licenses/gpl-3.0)`
    } 
    return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
        `This project is licensed under the ${renderLicenseLink(license)} license.`
    )
} else {
    return ''
}
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// } 

const generateMarkdown = (mdData) => {
  let { title, description, contents, installation, usage, license, contribution, tests, github, email } = mdData;
  
  let content = 
  `# ${title}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  
  ${contents}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${renderLicenseSection(license)}
  
  ## Contributions
  
  ${contribution}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  Feel free to get in touch with any questions by emailing me at ${email}
  
  My GitHub profile can be accessed at https://github.com/${github}
  
  `;
  return content
  }

module.exports = generateMarkdown;
