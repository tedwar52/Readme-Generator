// function to generate markdown for README
function generateMarkdown(data) {
  return `
  **${data.title}**

  **_Description_**

  ${data.description}

  **_Table of Contents_**
  - <a name="Installation">Installation</a>
  - <a name="Usage">Usage</a>
  - <a name="Guidelines>Contributors</a>
  - <a name="Testing">Testing</a>
  - <a name="License">License</a>
  - <a name="More">See More</a>

  **_Installation_**[link text](#Installation)

  ${data.installation}

  **_Usage_**[link text](#Usage)

  ${data.usage}

  **_Contributors_**[link text](#Guidelines)

  ${data.guidelines}

  **_Testing_**[link text](#Testing)

  ${data.testing}

  **_License_**[link text](#License)

  ${data.license}

  **_See more about this_**[link text](#More)

  [Github link]("https://github.com/${data.github}")  
  [Email Address](${data.email})

`;
}

module.exports = generateMarkdown;
