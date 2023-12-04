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

export default router;
