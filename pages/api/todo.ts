const todo = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

export default function handler(_req, res) {
  res.status(200).json(todo)
}