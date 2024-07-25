const fs = require('fs')

const path = require('path')

const faker = require('@faker-js/faker').faker



const generateOrganisation = () => {
  let organisation = {}

  
  organisation.details = {}

  //Organisation ID
  organisation.details.id = faker.string.uuid()

  //Organisation name
  organisation.details.name = faker.company.name()

  //UK provider reference number (UKPRN)
  organisation.details.ukprn = faker.string.numeric(8)

  //Unique reference number (URN)
  organisation.details.urn = faker.string.numeric(6)

  //Agreed by
  organisation.details.firstName = faker.person.firstName()
  organisation.details.lastName = faker.person.lastName()

  //Agreed on
  organisation.details.date = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2024-01-01T00:00:00.000Z' }) // '2026-05-16T02:22:53.002Z'

  //Region
  organisation.details.region = faker.location.county()

  //Hourly rate

  //Email
  organisation.details.email = emailAddress = `${organisation.details.firstName.toLowerCase()}.${organisation.details.lastName.toLowerCase()}@ed.co.uk`

  //Tel
  

  //Website
  organisation.details.website = faker.internet.domainName()
  
  //Address
  organisation.details.address = {
    line1: faker.location.buildingNumber() + " " + faker.location.street(),
    town: faker.location.city(),
    postcode: 'W9 1ST'
  }


  return organisation
}




const generateOrganisations = () => {
    
  const organisations = []
  
    for(let i = 0; i < 100; i++) {
        organisations.push(generateOrganisation())
    }

    return organisations
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