// function to generate markdown for README
function generateMarkdown(data) {
  return `
  **${data.title}**

  **_Description_**

  ${data.description}

  **_Table of Contents_**
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Guidelines)
  - [Testing](#Testing)
  - [License](#License)
  - [More](#More)

  <a name="Installation">**_Installation_**</a>

  ${data.installation}

  <a name="Usage">**_Usage_**</a>

  ${data.usage}

  <a name="Guidelines">**_Contributors_**</a>

  ${data.guidelines}

  <a name="Testing">**_Testing_**</a>

  ${data.testing}

  <a name="License">**_License_**</a>

  ${data.license}

  <a name="More">**_See more about this_**</a>

  [Github link](${data.github})  
  [Email Address](${data.email})

`;
}

module.exports = generateMarkdown;
