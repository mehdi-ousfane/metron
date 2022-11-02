import { ApolloServer } from "apollo-server-express";
import getTweetSchema from "./application/twitter/twitterSchema";
import twitterQueryResolver from "./application/twitter/twitterResolver";
import express from "express";
require("dotenv").config();
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(getTweetSchema, twitterQueryResolver);
