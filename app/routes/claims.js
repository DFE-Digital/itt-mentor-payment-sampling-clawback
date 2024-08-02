const _ = require('lodash')
module.exports = router => {

  // Claims Filters
   router.get('/claims', (req, res) => {
    let claims = req.session.data.claims

    let selectedStatusFilters = _.get(req.session.data.filters, 'statuses')

    let selectedFilters = {
      categories: []
    }

    if (_.get(selectedStatusFilters, 'length')) {
      claims = claims.filter(claim => {
        let matchesStatus = true
        
        matchesStatus = selectedStatusFilters.includes(claim.status);

        return matchesStatus
      })

      selectedFilters.categories.push({
        heading: {text: 'status'},
        items: selectedStatusFilters.map(label => {
          return{
            text: label,
            href: `/claims/remove-status/${label}`  
          }
        })
      }) 
  }

    res.render('claims/index', {
      claims,
      selectedFilters

    })
  })

  //Remove filter
  router.get('/claims/remove-status/:status', (req, res) => {
    _.set(req, 'session.data.filters.statuses',  _.pull(req.session.data.filters.statuses, req.params.status))
    res.redirect('/claims')
  })

  //////////////////////////////////////

    
  //Claims list
  router.get('/claims/:claimId', (req, res) => {
    let claimDetails = req.session.data.claims.find(claim => claim.id === req.params.claimId)

    res.render('claims/show', {
      claimDetails
    })
  })

  ///variable is called claim
  // router.get('/claims/:claimId', (req, res) => {
  //   res.locals.claim = req.session.data.claims.find(claim => claim.id === req.params.claimId)

  //   res.render('claims/show')
  // })


}
