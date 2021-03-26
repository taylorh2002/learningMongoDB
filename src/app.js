require("./db/connection")
const { Person } = require("./models/Person")
const { Task } = require("./models/Task")

const app = async () => {
    
    try {
        const person = new Person({ 
            name: "Taylor",
            email: "taylor@email.com",
            age: "18",
            likesPizza: true
        }) 

        await person.save()

    } catch (err){
        console.log(err)
    }
}

app();
