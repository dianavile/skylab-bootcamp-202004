require('dotenv').config()

const { PORT, SECRET } = process.env

const express = require('express')
const { registerUser, authenticateUser, retrieveUser, retrieveContact, retrieveStickie, addContact, searchContacts, listContacts, addStickie, searchStickies, listStickies, removeContact, removeStickies } = require('./logic')
const parseToken = require('./helpers/middlewares/token')
const { find } = require('./data')
const bodyParser = require('body-parser')
const { name, version } = require('./package.json')
const { handleError } = require('./helpers/errors')
const { sign } = require('./utils/jwt-promised')

const app = express()

const parseBody = bodyParser.json()

// users

app.post('/users', parseBody, (req, res) => {
    const { body } = req

    try {
        registerUser(body) 
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
        
    } catch (error) {
        handleError(error, res)
    }
})

app.get('/users', parseToken, (req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve user and send it back
    // TODO if userId is received as a param, the retrieve that user instead of requester user
    const {sub: userId, token} = req

    try {
        retrieveUser(userId)
            .then(user => res.status(200).send(user))
            .catch(error => handleError(error, res))            
    } catch (error) {
        handleError(error, res)
    }
})

app.post('/users/auth', parseBody, (req, res) => {
    const { body } = req

    try {
        authenticateUser(body)
            .then(userId => sign({sub:userId}, SECRET, { expiresIn: '1d'}))
            .then(token => res.status(200).send({token}))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
})

app.get('/users/id:id', parseToken, (req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve user and send it back
    // TODO if userId is received as a param, the retrieve that user instead of requester user
    const {sub: userId} = req
    const { id } = req.params

    try{
        retrieveUser(userId)
            .then(user => {
                if (!id) return res.send(user)
                retrieveUser(id)
                    .then(otherUser => res.status(200).json(otherUser))
                    .catch( error => handleError(error, res)) 
            }) 
    }catch(error){
        handleError(error, res)
    }
})


// contacts

app.post('/contacts', parseBody, parseToken, (req, res) => {
    const {sub: userId, body} = req

    try {
        addContact(userId, body)
            .then(contactId => {res.status(201).send({ contactId })})
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
})

app.get('/contacts', parseToken, (req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve contact by contact id param and send it back
    const {sub: userId} = req

    try{
        listContacts(userId)
            .then(contacts => {res.send(contacts)})
            .catch(error => handleError(error, res))
                
    } catch (error) {
        handleError(error, res)
    }

})

app.get('/contacts/q=:query', parseToken,(req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve contact by contact id param and send it back
    const {sub: userId} = req

    const { query } = req.params

    try {
        searchContacts(userId, query)
            .then(results => {
                if (!results) return res.status(404).json({error: "No contacts found"})

                else res.send(results)  
            })
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }

})

app.get('/contacts/id:contactId/', parseToken, (req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve contact by contact id param and send it back
    const {sub: userId} = req

    const { contactId } = req.params

    try {
        retrieveContact(userId, contactId)
            .then(contact => res.status(200).send(contact))
            .catch(error => handleError(error, res))            
    } catch (error) {
        handleError(error, res)
    }

})

app.delete('/contacts', parseBody, parseToken,(req, res) => {
    const {sub: userId, body} = req

    try {
        removeContact(userId, body.contactId)
            .then(() => {res.status(204).send()})
            .catch(error => handleError(error, res))       
    } catch (error) {
        handleError(error, res)
    }

})

// stickie

app.get('/stickies', parseToken, (req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve contact by contact id param and send it back
    const {sub: userId} = req

    try{
        listStickies(userId)
            .then(stickies => {res.send(stickies)})
            .catch(error => handleError(error, res))
                
    } catch (error) {
        handleError(error, res)
    }

})

app.post('/stickies', parseBody, parseToken, (req, res) => {
    const {sub: userId, body} = req

    try {
        addStickie(userId, body, (error, stickieId) => {
            if (error) return handleError(error, res)

            res.status(201).send({ stickieId })
        })
    } catch (error) {
        handleError(error, res)
    }
})

app.get('/stickies/id:stickieId', parseToken, (req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve contact by contact id param and send it back
    const {sub: userId} = req

    const { stickieId } = req.params

    try {
        retrieveStickie(userId, stickieId)
            .then(stickie => res.status(200).send(stickie))
            .catch(error => handleError(error, res))            
    } catch (error) {
        handleError(error, res)
    }

})

app.get('/stickies/q=:query', parseToken,(req, res) => {
    // TODO extract userId from authorization (bearer token) then retrieve contact by contact id param and send it back
    const {sub: userId} = req

    const { query } = req.params

    try {
        searchStickies(userId, query)
            .then(results => {
                if (!results) return res.status(404).json({error: "No contacts found"})

                else res.send(results)  
            })
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }

})

app.delete('/stickies', parseBody, parseToken,(req, res) => {
    const {sub: userId, body} = req

    try {
        removeStickies(userId, body.stickieId)
            .then(() => {res.status(204).send()})
            .catch(error => handleError(error, res))    
       
    } catch (error) {
        handleError(error, res)
    }

})


// other

app.get('*', (req, res) => {
    res.status(404).send('Not Found :(')
})



app.listen(PORT, () => console.log(`${name} ${version} running at port ${PORT}`))