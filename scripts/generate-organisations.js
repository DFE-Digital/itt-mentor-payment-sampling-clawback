const fs = require('fs')

const path = require('path')

const faker = require('@faker-js/faker').faker



const generateOrganisation = () => {
  let organisation = {}

  
  organisation.details = {}

  //Organisation ID
  organisation.details.id = "" + faker.number.int({ min: 123456, max: 999999 })

  //Stautuses
  organisation.details.claim = faker.helpers.arrayElement([
    'Submitted',
    'Draft',
    'Checking',
    'Sent for payment',
    'Sampling',
    'Information needed',
    'Ineligible',
    'Paid',
    'Approved',
    'Awaiting clawback',
    'Clawback complete'
  ])

  //Providers
  organisation.details.provider = faker.helpers.arrayElement([
    'Best Practice Network',
    'National Institute of Teaching'
  ])
  
  //Organisation uuid
  organisation.details.uuid = faker.string.uuid()

  //Organisation name
  organisation.details.name = faker.company.buzzNoun() + " school"

  //UK provider reference number (UKPRN)
  organisation.details.ukprn = faker.string.numeric(8)

  //Unique reference number (URN)
  organisation.details.urn = faker.string.numeric(6)

  //Agreed by
  organisation.details.firstName = faker.person.firstName()
  organisation.details.lastName = faker.person.lastName()

  //Agreed on
  organisation.details.date = faker.date.recent({ days: 300 })

  //Region
  organisation.details.region = faker.location.county()

  //Cost
  organisation.details.cost = faker.commerce.price({ min: 100, max: 10000, symbol: '£' })

  //Email
  organisation.details.emailAddress = `${organisation.details.firstName.toLowerCase()}.${organisation.details.lastName.toLowerCase()}@${organisation.details.name.toLowerCase()}.school.uk`

  //Tel
  organisation.details.phone = faker.phone.number()

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


  