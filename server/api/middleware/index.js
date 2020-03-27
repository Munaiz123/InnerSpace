const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(403)
  }
}

const isLandlord = (req, res, next) => {
  if (req.user && req.user.isLandlord) {
    next()
  } else {
    res.sendStatus(403)
  }
}

const isNotLoggedIn = (req, res, next) => {
  if (!req.user) {
    next()
  } else {
    res.sendStatus(403)
  }
}

module.exports = {isLoggedIn, isLandlord, isNotLoggedIn}
