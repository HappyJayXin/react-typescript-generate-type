const user = {
	"user_id": "xingyu.chen@kdanmobile.com",
	"email": "xingyu.chen@kdanmobile.com",
	"given_name": "Jay",
	"family_name": "Chen",
	"groups": [
		{
			"name": "Participants"
		}
	],
	"details": {
		"phone_number": "5555558377",
		"preferred_language": "zh-tw"
	}
}

export default function handler(_req, res) {
  res.status(200).json(user)
}