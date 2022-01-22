require("dotenv/config");

interface JwtData {
  secret: string;
  expiresIn: string;
}

export default {
  jwt: <JwtData>{
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRESIN,
  },
};
