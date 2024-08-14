//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('statusColour', status => {
  switch(status) {
    case 'Submitted':
      return 'govuk-tag--blue'
    case 'Draft':
      return 'govuk-tag--grey'
    case 'Paid':
      return 'govuk-tag--orange'
    case 'Not paid':
      return 'govuk-tag--turquoise'
    case 'Sampling':
      return 'govuk-tag--yellow'
    case 'Information required':
      return 'govuk-tag--purple'
    case 'Information sent':
      return 'govuk-tag--grey'
    case 'Approved':
      return 'govuk-tag--red'
    case 'Not approved':
      return 'govuk-tag--green'
    case 'Sampled and paid':
      return 'govuk-tag--light-blue'
    case 'Clawback required':
      return 'govuk-tag--pink'
    case 'Clawback revision':
      return 'govuk-tag--yellow'
    case 'Clawback started':
      return 'govuk-tag--turquoise'
    case 'Clawback complete':
      return 'govuk-tag--orange'
  }
})