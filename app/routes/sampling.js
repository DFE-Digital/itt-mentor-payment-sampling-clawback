const _ = require('lodash')
module.exports = router => {

    //Samples main list
    router.get('/sampling/:claimId', (req, res) => {
        let sample = req.session.data.claims.find(claim => claim.id === req.params.claimId)

        res.render('sampling/show', {
            sample
        })
    })

}
