// --- src/app.ts ---
import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { context } from './config/context';
import { formatError } from './errorHandler';
const server = new ApolloServer({
  schema,
  context,
  formatError,
  introspection: true,

});

export default server;