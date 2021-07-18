const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const compression = require('compression')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`We'll leave as soon as you're ready, Docking Bay ${PORT}!`);
		// log where we can go to test our GQL API
		console.log(
			`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
		);
  });
});
