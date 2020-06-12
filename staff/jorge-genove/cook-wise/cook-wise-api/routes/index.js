const { env: { SECRET } } = process

const { Router } = require('express')
const { 
    registerUser, 
    authenticateUser, 
    createIngredient,
    createRecipe,
    searchRecipe,
    toogleFavorite,
    retrieveFavorite,
    retrieveUser,
    toogleMenu,
    retriveDay,
    groceryList,
    recipeIdeas,
    deleteRecipe,
    deleteTimelineMenu,
    deleteDayMenu
} = require('./handlers')

const bodyParser = require('body-parser')
const { jwtVerifierExtractor } = require('../middlewares')
const { handleError } = require('../helpers')



const parseBody = bodyParser.json()
const verifyExtractJwt = jwtVerifierExtractor(SECRET, handleError)

const api = new Router()

api.post('/users', parseBody, registerUser)

api.post('/users/auth', parseBody, authenticateUser)

api.post('/ingredients', parseBody, createIngredient)

api.post('/recipes', parseBody, verifyExtractJwt, createRecipe)

api.get('/recipes', verifyExtractJwt, searchRecipe)

api.patch('/toogle',[parseBody,verifyExtractJwt],toogleFavorite)

api.get('/retrievefavorites', verifyExtractJwt, retrieveFavorite)

api.get('/users/retrieve', verifyExtractJwt, retrieveUser)

api.patch('/tooglemenu',[parseBody,verifyExtractJwt],toogleMenu)

api.get('/day',parseBody,verifyExtractJwt,retriveDay)

api.get('/grocerylist',verifyExtractJwt,groceryList)

api.get('/ideas',parseBody,verifyExtractJwt,recipeIdeas)

api.delete('/deleterecipe',parseBody,verifyExtractJwt,deleteRecipe)

api.delete('/deletetimelinemenu',parseBody,verifyExtractJwt,deleteTimelineMenu)

api.delete('/deletedaymenu',parseBody,verifyExtractJwt,deleteDayMenu)

module.exports = {
    api
}