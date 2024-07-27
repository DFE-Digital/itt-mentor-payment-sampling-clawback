const _ = require('lodash')

module.exports = router => {

 router.get('/claims', (req, res) => {
  let organisations = req.session.data.organisations
  let selectedStatusFilters = _.get(req.session.data.filters, 'statuses')

  if(_.get(selectedStatusFilters, 'length')) {
    selectedFilters.categories.push({
      heading: { text: 'Status' },
      items: selectedStatusFilters.map(label => {
        return {
          text: label,
          href: `/organisations/remove-status/${label}`
        }
      })
    })
  }



  res.render('claims/index', {
    organisations
  })
})
 
}