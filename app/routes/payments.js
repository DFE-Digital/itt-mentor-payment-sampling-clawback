module.exports = router => {

  //Payment list
  router.get('/payments/:claimId', (req, res) => {
    let payments = req.session.data.claims.find(claim => claim.id === req.params.claimId)

    res.render('payments/show', {
      payments    })
  })

}
