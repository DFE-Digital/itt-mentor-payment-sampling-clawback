//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/account')(router)
require('./routes/organisations')(router)
require('./routes/claims')(router)
require('./routes/sampling')(router)
require('./routes/payments')(router)
require('./routes/clawback')(router)

