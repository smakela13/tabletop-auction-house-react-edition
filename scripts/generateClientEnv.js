require('dotenv').config();
const fs = require('fs');
const clientEnv = {
	USER_ID: process.env.USER_ID,
	SERVICE_ID: process.env.SERVICE_ID,
	TEMPLATE_ID: process.env.TEMPLATE_ID,
	PUBLIC_URL: process.env.PUBLIC_URL,
};

console.log(process.cwd())
const pathToWrite = './client/public';
const fileToWrite = `${pathToWrite}/client-env.js`;
const globalVarName = 'env';
const content = `window.${globalVarName} = ${JSON.stringify(clientEnv)}`;

try {
	fs.writeFileSync(fileToWrite, content, 'utf8');
} catch (err) {
	// eslint-disable-next-line no-console
	console.log('Error while writing client-env file:', err.message);
	process.exit(1);
}
