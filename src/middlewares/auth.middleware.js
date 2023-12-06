import env from "dotenv";
import jwt from "jsonwebtoken";
env.config();
const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

function verifyAccessToken(token, secretKey) {
  try {
    console.log(token);
    console.log(secretKey);
    return jwt.verify(token, secretKey);
  } catch (error) {
    return false;
  }
}

const authMiddleware = async (req, res, next) => {
  const reqAccessToken = req.cookies.accessToken;
  const [accessTokenType, accessToken] = (reqAccessToken ?? "").split(" ");
  try {
    // 토큰 타입이 일치하지 않을 경우
    if (accessTokenType !== "Bearer") throw new Error("토큰 타입이 일치하지 않습니다.");

    // 유효성검사
    const verifiedAccessToken = verifyAccessToken(accessToken, accessTokenSecretKey);
    console.log(verifiedAccessToken);
    if (verifiedAccessToken) {
      req.user = verifiedAccessToken.id;
      res.locals.currentUser = verifiedAccessToken.userId;
      next();
    } else throw new Error("로그인이 필요한 서비스입니다.");
  } catch (err) {
    next(err);
  }
};

export { authMiddleware };
