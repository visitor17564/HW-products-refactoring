import env from "dotenv";
env.config();
const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

const authMiddleware = async (req, res, next) => {
  console.log(req.cookie);
  const reqAccessToken = req.cookie.accessToken;
  const [accessTokenType, accessToken] = (reqAccessToken ?? "").split(" ");

  // 토큰 타입이 일치하지 않을 경우
  if (accessTokenType !== "Bearer") throw new Error("토큰 타입이 일치하지 않습니다.");

  // 유효성검사
  const verifiedAccessToken = verifyAccessToken(token, accessTokenSecretKey);
  if (verifiedAccessToken) {
    req.user = verifiedAccessToken.id;
    res.locals.currentUser = verifiedAccessToken.userId;
    next();
  }
};

function verifyAccessToken(token, secretKey) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return false;
  }
}

export { authMiddleware };
