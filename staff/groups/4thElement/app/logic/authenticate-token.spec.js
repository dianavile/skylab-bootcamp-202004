describe('authenticate-token', () => {
    let thElement, name, surname, email, password, _token

    beforeEach(() => {
        thElement = true
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `${name.toLowerCase().split(' ').join('')}${surname.toLowerCase().split(' ').join('')}@mail1.com`
        password = passwords.random()
    })

    describe('Authenticate token', () => {
        beforeEach(done => {
            call('POST', 'https://skylabcoders.herokuapp.com/api/v2/users',
                `{ "thElement": "true", "name": "${name}", "surname": "${surname}", "username": "${email}", "password": "${password}" }`, { 'Content-type': 'application/json' },
                (error, status, body) => {
                    if (error) return done(new Error(error.message))
                    if (status === 409) {
                        const { error: _error } = JSON.parse(body)
                        return done(new Error(_error))
                    }
                    if (status !== 201) return done(new Error(`unexpected ${status}`))

                    call('POST', 'https://skylabcoders.herokuapp.com/api/v2/users/auth',
                        `{ "username": "${email}", "password": "${password}" }`, { 'Content-type': 'application/json' },
                        (error, status, body) => {
                            if (error) return done(new Error(error.message))
                            if (status !== 200) return done(new Error(`unexpected ${status}`))

                            const { token } = JSON.parse(body)
                            _token = token
                            done()
                        })
                })
        })

        it('should return status 200', done => {
            authenticateToken(_token, (error, status) => {

                expect(status).to.be.true
                expect(error).to.be.undefined

                done();
            })
        })

    })

})