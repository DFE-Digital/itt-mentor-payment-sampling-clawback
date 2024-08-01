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
  // Provider
  /////////////////////////////////////

  // Samples Filters filters[accreditedProvider]
  router.get('/sampling', (req, res) => {
    let claims = req.session.data.claims

    let selectedProviderFilters = _.get(req.session.data.filters, 'accreditedProvider')

    let selectedFilters = {
    categories: []
    }

    if (_.get(selectedProviderFilters, 'length')) {
        claims = claims.filter(claim => {
        let matchesProvider = true
        
        matchesProvider = selectedProviderFilters.includes(claim.provider);

        return matchesProvider
    })

    selectedFilters.categories.push({
        heading: {text: 'status'},
        items: selectedProviderFilters.map(label => {
          return{
            text: label,
            href: `/sampling/remove-status/${label}`  
          }
        })
      }) 
}

    res.render('sampling/index', {
    claims,
    selectedFilters

    })
})

//Remove provider filter
router.get('/sampling/remove-provider/:provider', (req, res) => {
    _.set(req, 'session.data.filters.accreditedProvider',  _.pull(req.session.data.filters.accreditedProvider, req.params.provider))
    res.redirect('/sampling')
})

    
  //Claims list
  router.get('/claims/:claimId', (req, res) => {
    let claimDetails = req.session.data.claims.find(claim => claim.id === req.params.claimId)

    res.render('claims/show', {
      claimDetails
    })
  })


}
