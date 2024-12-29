"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const authenticate = async (req, res) => {
    const token = req.headers.authorization || '';
    let user = {};
    if (token) {
        user = jsonwebtoken_1.default.verify(token, jwtSecretKey);
    }
    else {
        throw new Error('Invalid token');
    }
    return { user };
};
exports.default = authenticate;
