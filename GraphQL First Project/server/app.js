const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb+srv://dariusjecu:test123@cluster0.8e9lnze.mongodb.net/?retryWrites=true&w=majority")
mongoose.connection.once("open", ()=>{
    console.log("connected to database")
})

app.use("/graphql", graphqlHTTP({
     schema,
     graphiql: true
}))

app.listen(4000, () => {
    console.log("now listening for request on port 4000")
})