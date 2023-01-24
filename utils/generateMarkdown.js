// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// } 

const generateMarkdown = (mdData) => {
  let { title, description, contents, installation, usage, licence, contribution, tests, github, email } = mdData;
  
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
  
  ## Licence
  
  ${licence}
  
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
