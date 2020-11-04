const express = require("express");
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const app = express();
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.get("/posts/:postId/comments", (req, res) => {
    const postId = req.params.postId
    const comments = commentsByPostId[postId] || []
    //TODO REMOVE - ONLY FOR TESTING LOADING PURPOSE
    const wait = async () => {
        await setTimeout(() => res.status(200).json({ list: comments }), 500)
    }
    wait();
    //res.json({ list: Object.values(comments) })
});

app.post("/posts/:postId/comments", (req, res) => {
    const postId = req.params.postId
    const { content } = req.body
    const comments = commentsByPostId[req.params.postId] || []
    const commentId = randomBytes(4).toString('hex')
    const newComment = { id: commentId, content }
    comments.push(newComment)
    commentsByPostId[postId] = comments
    res.status(201).send(newComment)
});

app.delete("/posts/:postId/comments/:commentId", (req, res) => {
    const postId = req.params.postId
    if (!commentsByPostId[req.params.postId]) res.status(204).send()
    const commentId = req.params.commentId
    const comments = commentsByPostId[req.params.postId].filter(comment => comment.id !== commentId)
    commentsByPostId[postId] = comments
    res.status(204).send()
});

app.listen(4001, () => {
    console.log('Listening on port: 4001')
})