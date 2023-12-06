import express from "express";
import { AuthController } from "../controllers/auth.controller.js";

const router = express.Router();

// 인스턴스 생성
const authController = new AuthController();

/** 내 정보 상세 조회 API **/
router.post("/login", authController.login);

/** 내 정보 작성 API **/
router.post("/logout", authController.logout);

export default router;
