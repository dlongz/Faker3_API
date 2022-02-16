const { response, request } = require('express')
const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 8000


// ***MiddleWare*****

// app.use( express.json() );
// app.use( express.urlencoded({ extended: true}) )


// app.get("/api/welcome", (req, res) => {
//     // res.send("This Message IS WOW")
//     res.json({message: "This is another message sent with Response!!"})
//     console.log("And ANOTHER ONE!!!")
// })


// app.post("/api/welcome", (req, res) => {
//     console.log("This is a POST Message")
//     res.json({
//         message: ["Something About This IS FLYSHY LOL"],
//         ourReqBody: req.body
//     })


//     console.log(req.body)
// })

const createNewUser = () =>{
    const newFake = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    
    return newFake;
}

const createNewCompany = () => {
    const newFake = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFake
}

const newUser = createNewUser();
const newCompany = createNewCompany();
console.log(newUser);
console.log(newCompany);

// ***Routing***
app.use( express.json() );
app.use( express.urlencoded({ extended: true}) )


app.get('/api/users/new', (req, res) => {
    res.json(newUser)
})

app.get('/api/companies/new', (req, res) => {
    res.json(newCompany)
})

app.get('/api/user/company', (req, res) => {
    const userCompany = {
        User: newUser,
        Company: newCompany
    }
    res.json(userCompany)
})













app.listen(port, () => console.log(`Server is Ready to Rockk on port ${port}`))