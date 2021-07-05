const aes256 = require("aes256");

const handler = async (event) => {
	const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

	try {
		const message = event.queryStringParameters.message;
		const decryptedMessage = aes256.decrypt(ENCRYPTION_KEY, message);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: decryptedMessage }),
		};
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};

module.exports = { handler };
