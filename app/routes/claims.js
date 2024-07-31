module.exports = router => {
  
  router.get('/claims/:claimId', (req, res) => {
    let claimDetails = req.session.data.claims.find(claim => claim.id === req.params.claimId)

    res.render('claims/show', {
      claimDetails
    })
})

}
