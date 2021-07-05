// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const aes256 = require("aes256");

const handler = async (event) => {
	const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

	try {
		const message = event.queryStringParameters.message;
		const encryptedMessage = aes256.encrypt(ENCRYPTION_KEY, message);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: encryptedMessage }),
			// // more keys you can return:
			// headers: { "headerName": "headerValue", ... },
			// isBase64Encoded: true,
		};
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};

module.exports = { handler };
