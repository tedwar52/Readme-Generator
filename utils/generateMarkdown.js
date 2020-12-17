// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ##${data.title}##

  ##_Description_**

  ${data.description}

  ##_Installation_##

  ${data.installation}

  ##_Usage_##

  ${data.usage}

  ##_Guidelines_##

  ${data.guidelines}

  ##_Testing_##

  ${data.testing}

  ##_License_##

  ${data.license}

  ##_See more about this_##

  Github link: ${data.github},
  Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
