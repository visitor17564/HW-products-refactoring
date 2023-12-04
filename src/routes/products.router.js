import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { ProductsService } from "../services/products.service.js";
import { ProductsController } from "../controllers/posts.controller.js";
import { ProductsRepository } from "../repositories/posts.repository.js";

export default router;
