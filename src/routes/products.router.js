import express from "express";

import { prisma } from "../utils/prisma/index.js";
import { ProductsService } from "../services/products.service.js";
import { ProductsController } from "../controllers/products.controller.js";
import { ProductsRepository } from "../repositories/products.repository.js";

const router = express.Router();

// 의존성 주입
const productsRepository = new ProductsRepository(prisma);
const productsService = new ProductsService(productsRepository);
const productsController = new ProductsController(productsService);

/** 상품 조회 API **/
router.get("/", productsController.findAllProducts);

/** 상품 상세 조회 API **/
router.get("/:productId", productsController.findProductById);

/** 상품 작성 API **/
router.post("/", productsController.createProduct);

/** 상품 수정 API **/
router.put("/:productId", productsController.updateProduct);

/** 상품 삭제 API **/
router.delete("/:productId", productsController.deleteProduct);

export default router;
