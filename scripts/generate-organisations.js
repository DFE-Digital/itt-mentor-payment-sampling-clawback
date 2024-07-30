const fs = require('fs')

const path = require('path')

const faker = require('@faker-js/faker').faker



const generateOrganisation = () => {
  let organisation = {}

  
  

  //Organisation ID
  organisation.id = "" + faker.number.int({ min: 123456, max: 999999 })


  //Stautuses
  organisation.claim = faker.helpers.arrayElement([
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
  organisation.provider = faker.helpers.arrayElement([
    'Best Practice Network',
    'National Institute of Teaching'
  ])
  
  //Organisation uuid
  organisation.uuid = faker.string.uuid()

  //School name
  organisation.name = faker.company.buzzAdjective() + " school"

  //claim Ref number
  organisation.claimRef = "" + faker.number.int({ min: 123456, max: 999999 })
  

  //Organisation Ref number append to school name
  organisation.claimRefandNum = organisation.claimRef + " - " + organisation.name

  //UK provider reference number (UKPRN)
  organisation.ukprn = faker.string.numeric(8)

  //Unique reference number (URN)
  organisation.urn = faker.string.numeric(6)

  //Agreed by
  organisation.firstName = faker.person.firstName()
  organisation.lastName = faker.person.lastName()

  //DAte
  organisation.date = faker.date.recent({ days: 300 })

  //Region
  organisation.region = faker.location.county()

  //Cost
  organisation.cost = faker.commerce.price({ min: 100, max: 10000, symbol: '£' })

  //Email
  organisation.emailAddress = `${organisation.firstName.toLowerCase()}.${organisation.lastName.toLowerCase()}@${organisation.name.toLowerCase()}.uk`

  //Tel
  organisation.phone = faker.phone.number()

  //Website
  organisation.website = faker.internet.domainName()
  
  
  //Address
  organisation.address = {
    line1: faker.location.buildingNumber() + " " + faker.location.street(),
    town: faker.location.city(),
    postcode: 'W9 1ST'
  }


  return organisation
}




const generateOrganisations = () => {
    
  const organisations = []
  
    for(let i = 0; i < 20; i++) {
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


  