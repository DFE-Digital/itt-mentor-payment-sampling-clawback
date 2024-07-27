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
      return 'govuk-tag--orange'
    case 'Sent for payment':
      return 'govuk-tag--turquoise'
    case 'Sampling':
      return 'govuk-tag--yellow'
    case 'Information needed':
      return 'govuk-tag--purple'
    case 'Ineligible':
      return 'govuk-tag--red'
    case 'Paid':
      return 'govuk-tag--green'
    case 'Approved':
      return 'govuk-tag--light-blue'
    case 'Awaiting clawback':
      return 'govuk-tag--pink'
    case 'Clawback complete':
      return 'govuk-tag--red'
  }
})