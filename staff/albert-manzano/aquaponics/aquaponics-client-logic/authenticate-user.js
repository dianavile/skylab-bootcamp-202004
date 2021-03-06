/**
 * Checks user credentials.
 * 
 * @param {string} email The user e-mail. 
 * @param {string} password The user password.
 * @returns {Promise<String>} The authorization token if it resolves, an error if it rejects.
 * @throws {TypeError} If any of the parameters does not match the corresponding type.
 * @throws {Error} If e-mail does not match the expected format.
 */

require('aquaponics-commons/polyfills/string')
const { utils: { Email, call } } = require('aquaponics-commons')
const __context__ = require('./context')

module.exports = function (email, password) {
    Email.validate(email)
    String.validate.notVoid(password)
    
    return call(
        'POST', 
        `${this.API_URL}/users/auth`,
        {email,password},
        { 'Content-type': 'application/json' })
        .then(({ status, body }) => {
            
            if (status === 200) {
                const { userId } = JSON.parse(body)
                               
                this.storage.setItem('userId',userId)

                return (()=>{})
            } else {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
        })
}.bind(__context__)

/**
 * @async returns:
 * @return {UnexistenceError} if users email is not found on data base.
 * @return {CredentialsError} if users password doesnt match the email provided.
 * @return {Error} It may receive an error in case remote logic fails or there is a network problem.
 * set id in context {user.id} returns the Id if succeded. 
 */