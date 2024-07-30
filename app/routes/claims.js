const _ = require('lodash')

module.exports = router => {

  router.get('/claims/show', (req, res) => {
    let organisation = req.session.data.organisations
  
    res.render('claims/show', {
      organisation
    })
  })

 router.get('/claims', (req, res) => {
  let organisations = req.session.data.organisations
  
  let selectedStatusFilters = _.get(req.session.data.filters, 'statuses')

  if(_.get(selectedStatusFilters, 'length')) {
    organisations = organisations.details.filter(organisation => {
      let matchesStatus = true

      matchesStatus = selectedStatusFilters.includes(organisation.claim)
 
      return matchesStatus
    })
  }
  
  res.render('claims/index', {
    organisations
  })
})
 
}