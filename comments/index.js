const express = require("express");
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.get("/posts/:postId/comments", (req, res) => {
    const postId = req.params.postId
    const comments = commentsByPostId[postId] || []
    res.status(200).json({ list: comments })
});

app.post("/posts/:postId/comments", async (req, res) => {
    const postId = req.params.postId
    const { content } = req.body
    const comments = commentsByPostId[req.params.postId] || []
    const commentId = randomBytes(4).toString('hex')
    const newComment = { id: commentId, content }
    comments.push(newComment)
    commentsByPostId[postId] = comments

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: 'CommentCreated', data: { ...newComment, postId } }),
    };
    await fetch('http://localhost:4005/events', params)
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
app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type)
    res.status(200).send()
})
app.listen(4001, () => {
    console.log('Listening on port: 4001')
})