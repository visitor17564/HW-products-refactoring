import { UsersRepository } from "../repositories/users.repository.js";
import bcrypt from "bcrypt";

const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log(error);
  }
  return false;
};

export class AuthService {
  authRepository = new UsersRepository();

  login = async (id, password) => {
    // 저장소(Repository)에게 특정 유저정보 하나를 요청합니다.
    const user = await this.usersRepository.findUsersById(id);

    const isValidPass = await comparePassword(password, user.password);
    if (!isValidPass) throw new Error("비밀번호가 일치하지 않습니다.");

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  };
}
