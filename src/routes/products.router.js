import express from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// 인스턴스생성
const productsController = new ProductsController();

/** 상품 조회 API **/
router.get("/", productsController.findAllProducts);

/** 상품 상세 조회 API **/
router.get("/:productId", productsController.findProductById);

/** 상품 작성 API **/
router.post("/", authMiddleware, productsController.createProduct);

/** 상품 수정 API **/
router.put("/:productId", authMiddleware, productsController.updateProduct);

/** 상품 삭제 API **/
router.delete("/:productId", authMiddleware, productsController.deleteProduct);

export default router;
