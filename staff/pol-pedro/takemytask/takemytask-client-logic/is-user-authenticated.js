require('takemytask-commons/polyfills/string')
require('takemytask-commons/polyfills/function')
const { utils: { call } } = require('takemytask-commons')
const context = require('./context')

module.exports = function () {

    const { token } = this.storage

    return call('POST', `${this.API_URL}/users/retrive`,
        undefined,
        { 'Authorization': `Bearer ${token}` })
        .then(({ body }) => {
            const {name} = JSON.parse(body)
            return name
        })
}.bind(context)