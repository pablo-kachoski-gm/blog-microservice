const express = require("express");
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(cors())
const posts = {}

const waitForMillisec = 300

app.get("/posts/:postId", (req, res) => {
    const id = req.params.postId
    const foundPost = posts[id]
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.status(200).json({ ...foundPost }), waitForMillisec)
    }
    wait();
    //res.json({ ...foundPost })
});
app.get("/posts", (_, res) => {
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.status(200).json({ list: Object.values(posts) }), waitForMillisec)
    }
    wait();
    //res.json({ list: Object.values(posts) })
});

app.delete("/posts/:postId", (req, res) => {
    const id = req.params.postId
    delete posts[id]
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.status(204).send(), waitForMillisec)
    }
    wait();
    //res.status(204).send()
});
app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body
    posts[id] = { id, title }
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.status(201).send(posts[id]), waitForMillisec)
    }
    wait();
    //res.status(201).send(posts[id])
});

app.listen(4000, () => {
    console.log('Listening on port: 4000')
})