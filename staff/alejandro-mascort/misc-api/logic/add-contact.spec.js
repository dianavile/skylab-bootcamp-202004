
const { random } = Math
const fs = require('fs')
const path = require('path')
const {deleteFilesByExtensionFromDirectory} = require('../utils/files.js')
const { expect } = require('chai')
const uid = require('../utils/uid')
const addContact = require('../logic/add-contact')

describe.only('addContact', () => {
    const data = path.join(__dirname, '..', 'data')

    let name, surname, email, password, id

    beforeEach(done =>{
        deleteFilesByExtensionFromDirectory(path.join(data, 'users'), '.json', error => {
            if (error) return done(error)
            
            deleteFilesByExtensionFromDirectory(path.join(data, 'contacts'), '.json', error => {
                if (error) return done(error)
           
                name = `name-${random()}`;
                surname = `surname${random()}`;
                email = `${random()}@mail.com`;
                password = `${random()}` ;
                id = uid()
    
                const newUser = {name,surname,email,password,id};
    
                fs.writeFile(path.join(data, 'users', `${id}.json`), JSON.prettify(newUser), error => {
                    if (error) return done(error) 
                    done()
                })
            })

        })
        
    })

    it('Sould sucess to add a contact',()=>{
        const contact = {
            name: 'Pepito',
            surname: 'Grillo',
            email: 'pepigri@mail.com',
            phone: '+34 123 123 123',
            birth: '1980/10/1',
            country: 'Spain'
        }

        return addContact(id, contact)
            .then(_id => {
                expect(_id).to.exist

                fs.readFile(path.join(__dirname,'..','data','contacts',`${_id}.json`), 'utf-8',(error,body)=>{
                    const {name: _name , surname:_surname,email:_email, phone:_phone , birth:_birth, country:_country,user:_id}= JSON.parse(body);
            
                    expect(contact.name).to.equal(_name)
                    expect(contact.surname).to.equal(_surname)
                    expect(contact.email).to.equal(_email)
                    expect(contact.phone).to.equal(_phone)
                    expect(contact.birth).to.equal(_birth)
                    expect(contact.country).to.equal(_country)
                    
                    expect(contact.user).to.equal(id)

                })
            })
    })
 

    it('Sould fail if no name or no surname are not provided',()=>{    
        const contact = {
            email: 'pepigri@mail.com',
            phone: '+34 123 123 123',
            birth: '1980/10/1',
            country: 'Spain'
        }

        expect(() => {
            return addContact(id, contact)
            .then(() => {throw new Error('should not reach this point')})
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.an.instanceof(Error);
                expect(error.message).to.equal('should have name or surname and email or phone')    
            })
        }).throw(Error, 'should have name or surname and email or phone')   
    })

    it('Sould fail if no email or no phone are not provided',()=>{
              
        const contact = {
            name: 'Pepito',
            surname: 'Grillo',
            birth: '1980/10/1',
            country: 'Spain'
        }
        
        expect(() => {
            return addContact(id, contact)
            .then(() => {throw new Error('should not reach this point')})
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.an.instanceof(Error);
                expect(error.message).to.equal('should have name or surname and email or phone')    
            })
        }).throw(Error, 'should have name or surname and email or phone')      
    })
        
    afterEach(done=>{
        deleteFilesByExtensionFromDirectory(path.join(data, 'users'), '.json', error => {
            if (error) return done(error)
             
            deleteFilesByExtensionFromDirectory(path.join(data, 'contacts'), '.json', error => {
                if (error) return done(error)
                    done()
            })
        })
    })    

})

    

