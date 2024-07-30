module.exports = router => {

  router.get('/organisations/:organisationId', (req, res) => {
    let organisation = req.session.data.organisations.find(organisation => organisation.id === req.params.organisationId)
  
    res.render('organisations/show', {
      organisation
    })
  })
 
}