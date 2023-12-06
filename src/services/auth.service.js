import { UsersRepository } from "../repositories/users.repository.js";
import bcrypt from "bcrypt";
import passport from "passport";
import LocalStrategy from "passport-local";

export class AuthService {
  authRepository = new UsersRepository();

  login = async (id, password) => {
    // 저장소(Repository)에게 특정 유저정보 하나를 요청합니다.
    const user = await this.usersRepository.findUsersById(id);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  };

  logout = async (id, password) => {
    // 저장소(Repository)에게 특정 유저정보 하나를 요청합니다.
    const user = await this.usersRepository.findUsersById(id);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  };
}

passport.use(
  new LocalStrategy(function verify(username, password, cb) {
    db.get("SELECT * FROM users WHERE username = ?", [username], function (err, row) {
      if (err) {
        return cb(err);
      }
      if (!row) {
        return cb(null, false, { message: "Incorrect username or password." });
      }

      crypto.pbkdf2(password, row.salt, 310000, 32, "sha256", function (err, hashedPassword) {
        if (err) {
          return cb(err);
        }
        if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
          return cb(null, false, { message: "Incorrect username or password." });
        }
        return cb(null, row);
      });
    });
  })
);
