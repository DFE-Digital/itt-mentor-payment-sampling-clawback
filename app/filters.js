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
    case 'Request information':
      return 'govuk-tag--orange'
    case 'Pending ESFA check':
      return 'govuk-tag--light-blue'
    case 'Sent to ESFA':
      return 'govuk-tag--light-green'
    case 'Paid':
      return 'govuk-tag--green'
    case 'Payment not approved':
      return 'govuk-tag--red'
    case 'Sampling in progress':
      return 'govuk-tag--yellow'
    case 'Sampled and paid':
      return 'govuk-tag--green'
    case 'Clawback required':
      return 'govuk-tag--light-blue'
    case 'Clawback review':
      return 'govuk-tag--yellow'
    case 'Claim updated':
      return 'govuk-tag--red'
    case 'Clawback pending':
      return 'govuk-tag--yellow'
    case 'Clawback complete':
      return 'govuk-tag--green'
    case 'Draft':
      return 'govuk-tag--grey'
  }
})