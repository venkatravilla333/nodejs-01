
function loggin(req, res, next) {
  console.log('logging')
  next()
}

module.exports = loggin