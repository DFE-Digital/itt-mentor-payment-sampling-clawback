module.exports = router => {

  router.post('/payments', (req, res) => {
      //status logic in
      res.redirect('payments/list')
  })    

}
