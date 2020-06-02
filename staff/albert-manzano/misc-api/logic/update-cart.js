require('../utils/polyfills/string')
require('../utils/polyfills/json')
require('../utils/polyfills/number')
const { UnexistenceError } = require('../errors')
const { mongo } = require('../data')
//ojoo!!!!!!!!
const { ObjectId } = mongo

module.exports = (userId, productId, quantity) => {

    //validate
    String.validate.notVoid(userId)
    String.validate.notVoid(productId)
    Number.validate.positive(quantity)

    //connect
    return mongo.connect()
        .then(connection => {
            const users = connection.db().collection('users')

            return users.findOne({ _id: ObjectId(userId) })
                .then(user => {
                    if (!user) throw new UnexistenceError(`user with id ${userId} does not exist`)
 
                    const { cart = [] } = user

                    const index = cart.findIndex(item => item.product.toString() === productId) // 'def' ===> 1
                        
                    if (quantity === 0) {
                        if (index < 0) throw new UnexistenceError(`product with id ${productId} does not exist in cart for user with id ${userId}`)

                        cart.splice(index, 1) //1
                    } else {
                        let product

                        if (index < 0) {
                            product = { product: ObjectId(productId) }

                            cart.push(product)
                        } else product = cart[index]
                            product.quantity = quantity
                    }

                    return users.updateOne({ _id: ObjectId(userId) }, { $set: { cart } })
                })
                .then(() => { })
        })
}