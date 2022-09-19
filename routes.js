const express = require("express")
const Post = require("./models/Post")
const router = express.Router()

router.get("/posts", async (req, res) => {
	const posts = await Post.find()
	res.send(posts)
})

router.post("/posts", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
        name: req.body.name,
        createdAt: req.body.createdAt,
		imageUrl: req.body.imageUrl
	})
	await post.save()
	res.send(post)
})

router.get("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}

        if (req.body.name) {
			post.name = req.body.name
		}

        if (req.body.createdAt) {
			post.createdAt = req.body.createdAt
		}

		if (req.body.imageUrl) {
			post.imageUrl = req.body.imageUrl
		}


		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post neexistuje!" })
	}
})
module.exports = router