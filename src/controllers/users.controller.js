import { UsersService } from "../services/users.service.js";

export class UsersController {
  usersService = new UsersService();

  findUsersById = async (req, res, next) => {
    try {
      const id = req.user;

      // 서비스 계층에 구현된 findUsersById 로직을 실행합니다.
      const user = await this.usersService.findUsersById(id);

      return res.status(200).json({ data: user });
    } catch (err) {
      next(err);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const { email, name, password } = req.body;

      if (!email || !password || !name) throw new Error("InvalidParamsError");

      // 서비스 계층에 구현된 createUser 로직을 실행합니다.
      const createUser = await this.usersService.createUser(email, name, password);

      return res.status(201).json({ data: createUser });
    } catch (err) {
      next(err);
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const { password } = req.body;
      const id = req.user;

      // 서비스 계층에 구현된 updateUser 로직을 실행합니다.
      const updateUser = await this.usersService.updateUser(id, password);

      return res.status(200).json({ data: updateUser });
    } catch (err) {
      next(err);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const { password } = req.body;
      const id = req.user;

      // 서비스 계층에 구현된 deleteUser 로직을 실행합니다.
      const deleteUser = await this.usersService.deleteUser(postId);

      return res.status(200).json({ data: deleteUser });
    } catch (err) {
      next(err);
    }
  };
}
