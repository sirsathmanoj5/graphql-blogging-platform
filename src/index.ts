import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";
import resolvers from "./resolvers";
import authenticate from './helpers/context';

const typeDefs = `#graphql ${fs.readFileSync("./schema.graphql")}`;

const PORT = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    includeStacktraceInErrorResponses: false
});

function serverStart() {
    return startStandaloneServer(server, {
        listen: { port: PORT},
    })
}

serverStart().then((serverInfo:any) => {
    console.log(`Server running at ${serverInfo.url}`);
})