const express = require("express");
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(cors())
const posts = {}

app.get("/posts", (_, res) => {
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.json({ list: Object.values(posts) }), 2000)
    }
    wait();

    //res.json({ list: Object.values(posts) })
});

app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body
    posts[id] = { id, title }
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.status(201).send(posts[id]), 2000)
    }
    wait();
    //res.status(201).send(posts[id])
});

app.listen(4000, () => {
    console.log('Listening on port: 4000')
})