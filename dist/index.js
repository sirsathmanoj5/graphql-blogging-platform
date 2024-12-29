"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const fs_1 = __importDefault(require("fs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs = `#graphql ${fs_1.default.readFileSync("./schema.graphql")}`;
const PORT = 4000;
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.default,
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
