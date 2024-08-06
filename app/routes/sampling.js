module.exports = router => {

    router.post('/sampling', (req, res) => {
        //status logic in
        res.redirect('sampling/list')
    })    

}
