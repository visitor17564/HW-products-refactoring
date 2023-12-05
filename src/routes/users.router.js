import express from "express";

import { prisma } from "../utils/prisma/index.js";
import { UsersService } from "../services/users.service.js";
import { UsersController } from "../controllers/users.controller.js";
import { UsersRepository } from "../repositories/users.repository.js";

const router = express.Router();

// 의존성 주입
const usersRepository = new UsersRepository(prisma);
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

/** 내 정보 상세 조회 API **/
router.get("/", usersController.findUsersById);

/** 내 정보 작성 API **/
router.post("/", usersController.createUser);

/** 내 정보 수정 API **/
router.put("/", usersController.updateUser);

/** 내 정보 삭제 API **/
router.delete("/", usersController.deleteUser);

export default router;
