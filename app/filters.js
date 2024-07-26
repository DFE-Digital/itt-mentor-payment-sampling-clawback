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
    case 'Checking':
      return 'govuk-tag--yellow'
    case 'Sent for payment':
      return 'govuk-tag--orange'
    case 'Sampling':
      return 'govuk-tag--purple'
    case 'Information needed':
      return 'govuk-tag--light-blue'
    case 'Ineligible':
      return 'govuk-tag--red'
    case 'Paid':
      return 'govuk-tag--green'
    case 'Approved':
      return 'govuk-tag--turquoise'
    case 'Awaiting clawback':
      return 'govuk-tag--grey'
    case 'Clawback complete':
      return 'govuk-tag--red'
  }
})