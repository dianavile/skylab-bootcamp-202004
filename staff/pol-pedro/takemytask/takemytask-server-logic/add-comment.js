require('takemytask-commons/polyfills/string')
require('takemytask-commons/polyfills/json')
var moment = require('moment')
const { errors: { UnexistenceError } } = require('takemytask-commons')
const { models: { Worker, Comments, User }, mongoose: {ObjectId} } = require('takemytask-data')


module.exports = (userId, commentedId, comment) => {

    String.validate.notVoid(userId)
    String.validate.notVoid(commentedId)
    String.validate.notVoid(comment) 

    return (async () => {

        let sender

        sender = await User.findOne({ _id: ObjectId(userId) }, {password: 0 })
         
        if(!sender ) sender = await Worker.findOne({ _id: ObjectId(userId) }, {password: 0 })

        const user = await Worker.findOne({ _id: ObjectId(commentedId) }, {password: 0 })

        if (!user) throw new UnexistenceError(`worker with id ${userId} dont exists`)

        user.comentsWorker.unshift( new Comments ({ 
            userId: ObjectId(userId), 
            name: sender.name,
            surname: sender.surname,
            text: comment, 
            date: new Date()
        }))

        await user.save()

    })()
}