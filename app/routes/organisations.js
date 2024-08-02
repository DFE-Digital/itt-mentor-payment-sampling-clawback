module.exports = router => {

  router.get('/organisations/:claimId', (req, res) => {
    let organisation = req.session.data.claims.find(claim => claim.id === req.params.claimId)

    res.render('organisations/show', {
      organisation
    })
  })
  
}