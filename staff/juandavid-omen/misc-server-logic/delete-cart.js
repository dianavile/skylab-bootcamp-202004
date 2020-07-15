require('misc-commons/polyfills/string')
require('misc-commons/polyfills/json')
require('misc-commons/polyfills/number')
const { errors: UnexistenceError } = require('misc-commons')
const { mongo } = require('misc-data')
const { ObjectId } = mongo

module.exports = (userId) => {
    String.validate.notVoid(userId)

    return mongo.connect()
        .then(connection => {
            const users = connection.db().collection('users')

            return users.findOne({ _id: ObjectId(userId) })
                .then(user => {
                    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)

                    const cart = []

                    return users.updateOne({ _id: ObjectId(userId) }, { $set: { cart } })
                })
                .then(() => { })
        })
}