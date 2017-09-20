const router = require('express').Router()
const User = require('../../models/users')

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.render('user-profile', {user, session: req.session.passport}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
