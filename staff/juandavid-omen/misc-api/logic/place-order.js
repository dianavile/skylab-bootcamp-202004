// cart (Id1, Id2, ...) => place order
require('../utils/polyfills/string')
require('../utils/polyfills/json')
require('../utils/polyfills/number')
const { UnexistenceError } = require('../errors')
const { mongo } = require('../data')
const { ObjectId } = mongo

module.exports = (userId) => {
    String.validate.notVoid(userId)

    return mongo.connect()
        .then(connection => {
            const users = connection.db().collection('users')
            const orders = connection.db().collection('orders')

            return users.findOne({ _id: ObjectId(userId) })
                .then(user => {
                    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)

                    const order = {order: user.cart}
                    delete user.cart

                    return orders.insertOne(order)
                })
                .then(() => { })
        })
}