module.exports = router => {

  router.get('/clawback/:claimId', (req, res) => {
    let clawbackDetails = req.session.data.claims.find(claim => claim.id === req.params.claimId)

    res.render('clawback/update', {
      clawbackDetails
    })
  })
}