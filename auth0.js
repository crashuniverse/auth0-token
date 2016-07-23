const auth0ApiTokens = require('auth0-api-tokens')

const TOKEN_EXPIRATION_IN_SECONDS = 3600 * 24 * 365

const createToken = auth0ApiTokens({
  clientId: process.env.API_KEY,
  clientSecret: process.env.API_SECRET,
})

const token = createToken({
    scopes: {
    users: ['read',]
    },
    lifetimeInSeconds: TOKEN_EXPIRATION_IN_SECONDS
});

module.exports.token = token
