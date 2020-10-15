const currentBlock = require("./utils")

describe('currentBlock', () => {
	it('returns the name of the last object in the block history array', () => {
		const blockHistory = [
			{
			"_id": "5f86c801e95026a57aac99cb",
			"number": 1,
			"name": "Fundamentals",
			"slug": "fun"
			},
			{
			"_id": "5f86c801e95026a57aac99cc",
			"number": 2,
			"name": "Back End",
			"slug": "be"
			},
			{
			"_id": "5f86c801e95026a57aac99cd",
			"number": 3,
			"name": "Front End",
			"slug": "fe"
			},
			{
			"_id": "5f86c801e95026a57aac99cd",
			"number": 3,
			"name": "Front End",
			"slug": "fe"
			},
			{
			"_id": "5f86c801e95026a57aac99ce",
			"number": 4,
			"name": "Project Phase",
			"slug": "proj"
			},
			{
			"_id": "5f86c801e95026a57aac99cf",
			"number": 5,
			"name": "Graduated",
			"slug": "grad"
			}
			];
		expect(currentBlock(blockHistory)).toBe('Graduated');
	});
});