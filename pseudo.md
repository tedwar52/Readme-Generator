1. User runs through prompts, answering each input question
2. Those answers are saved as an object, into a json file perhaps? (writeFile)
   2a. This step is to assign a value to a key in the readme
   {
   projectTitle: title [required]
   description: description [required]
   installation: installation
   usage: usage
   contribute: guidelines
   tests: testing
   license: license []
   github: github [required]
   email: email [required]
   }
3. Access that data (readFile)
4. Create a table of contents
5. Generate readme.md (writeFile)
