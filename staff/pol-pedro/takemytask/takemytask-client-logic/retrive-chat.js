require('takemytask-commons/polyfills/string')
const { utils: { call } } = require('takemytask-commons')
const context = require('./context')

module.exports = function (chatId) {
    const { token } = context.storage

    return call('POST', `${this.API_URL}/chat`,
        `{"chatId": "${chatId}" }`,
        {'Content-type': 'application/json', 'Authorization': `Bearer ${token}`})
            .then(({status, body}) => {
                if (status === 200){

                    return  JSON.parse(body)

                }else {

                    const { error } = JSON.parse(body)
                    throw new Error (error)
                }
            })
    
}.bind(context)