require('dotenv').config()

const { env: { TEST_MONGODB_URL: MONGODB_URL } } = process

const authenticateUser = require('./authenticate-user')
const { random } = Math
const { expect } = require('chai')
require('code-this-commons/polyfills/json')

require('code-this-commons/ponyfills/xhr')
const { mongo } = require('../code-this-data')
const bcrypt = require('bcryptjs')
require('code-this-commons/ponyfills/atob')

describe('logic - authenticate user', () => {
    let users

    before(() => mongo.connect(MONGODB_URL).then(connection => users = connection.db().collection('users')))

    let name, email, password, userId

    beforeEach(() =>
    users.deleteMany()
            .then(() => {
                name = `name-${random()}`
                email = `e-${random()}@mail.com`
                password = `password-${random()}`
                return bcrypt.hash(password, 10)
            }).then(_hash => hash = _hash)
    )

    describe('when user already exists', () => {
        beforeEach(() => {
            const user = { name, email, password: hash }

            return users.insertOne(user)
                .then(result => userId = result.insertedId.toString())
        })

        it('should succeed on correct credentials', () =>
            authenticateUser(email, password)
                .then(token => {
                    const [, payloadBase64] = token.split('.')

                    const payloadJson = atob(payloadBase64)

                    const payload = JSON.parse(payloadJson)

                    const { sub: _userId } = payload

                    expect(_userId).to.equal(userId)
                })
        )

        it('should fail on wrong password', () => {
            password += 'wrong-'

            return authenticateUser(email, password)
                .then(() => { throw new Error('should not reach this point') })
                .catch(error => {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(`wrong password`)
                })
        })
    })

    it('should fail when user does not exist', () =>
        authenticateUser(email, password)
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.equal(`user with e-mail ${email} does not exist`)
            })
    )

    afterEach(() => users.deleteMany())

    after(() => users.deleteMany().then(mongo.disconnect))
})