const _ = require('lodash')
module.exports = router => {
  
  router.get('/claims/sampling/show', (req, res) => {
    let claim = req.session.data.claims

    res.render('claims/show', {
      claim
    })
  })

}
