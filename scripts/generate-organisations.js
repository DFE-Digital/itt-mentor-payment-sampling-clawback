const fs = require('fs')

const path = require('path')

const faker = require('@faker-js/faker').faker


const generateOrganisations = () => {
    return []
}




const generateOrganisationsFile = (filePath) => {
    const organisations = generateOrganisations()
    const filedata = JSON.stringify(organisations, null, 2)
    fs.writeFile(
      filePath,
      filedata,
      (error) => {
        if (error) {
          console.error(error)
        }
        console.log(`Organisations generated: ${filePath}`)
      }
    )
  }
  
  generateOrganisationsFile(path.join(__dirname, '../app/data/organisations.json'))