const express = require('express')
const helmet = require("helmet")
const cors = require("cors")

const server = express()

server.use(cors())
server.use(helmet())

server.use(express.json())

server.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to the node-auth1-project API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
