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

export default router;
