const router = require('express').Router()
const User = require('../../models/users')

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.render('user-profile', {user, session: req.session.passport}))
})

module.exports = router
