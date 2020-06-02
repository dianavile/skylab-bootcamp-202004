/* eslint-disable no-unused-expressions */

import React from 'react'
import './Register.sass'
// import { register } from '../../src copy/serviceWorker'
import { registerUser } from 'misc-client-logic'

 
export default function () {


    function handleOnSubmit(event) {
        event.preventDefault()

        let { name, surname, email, password } = event.target
        debugger
        name = name.value,
        surname = surname.value,
        email = email.value,
        password = password.value

        try {
            registerUser(name, surname, email, password)
        } catch (error) {

        }
    }

    return <section onSubmit={handleOnSubmit} className="Register">
        <form>
            <input type="text" name="name"></input>
            <input type="text" name="surname"></input>
            <input type="text" name="email"></input>
            <input type="text" name="password"></input>
            <button>Submit</button>
        </form>

    </section>
}

