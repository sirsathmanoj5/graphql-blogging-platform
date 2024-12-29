"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const PORT = 4000;
const server = new server_1.ApolloServer({
    typeDefs: `
        type Query {
            message: String
        }
    `,
    resolvers: {
        Query: {
            message: () => console.log("Message")
        }
    },
    includeStacktraceInErrorResponses: false
});
function serverStart() {
    return (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: PORT },
    });
}
serverStart().then((serverInfo) => {
    console.log(`Server running at ${serverInfo.url}`);
});
