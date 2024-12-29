import jwt from "jsonwebtoken";
const jwtSecretKey: JsonWebKey | any = process.env.JWT_SECRET_KEY;

const authenticate = async(req: { headers: { authorization: any; }; user: string | jwt.JwtPayload; }, res: any) => {
    const token = req.headers.authorization || '';
    let user = {};
    if(token) {
        user = jwt.verify(token, jwtSecretKey);
    } else {
        throw new Error('Invalid token');
    }
    return { user }
}

export default authenticate;