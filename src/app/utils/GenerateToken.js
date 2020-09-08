const jwt = require('jsonwebtoken');

const AuthConfig = require('../../config/auth');

module.exports = (id) => {
  return jwt.sign({ id }, AuthConfig.secret, {
    expiresIn: AuthConfig.expiresIn
  });
}
