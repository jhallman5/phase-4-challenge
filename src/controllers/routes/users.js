const router = require('express').Router()
const User = require('../../models/users')

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.render('user_profile', {user}))
})

module.exports = router