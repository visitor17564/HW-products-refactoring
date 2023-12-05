import { ProductsService } from "../services/products.service.js";
export class ProductsController {
  productsService = new ProductsService();

  findAllProducts = async (req, res, next) => {
    try {
      // 서비스 계층에 구현된 findAllProducts 로직을 실행합니다.
      const products = await this.productsService.findAllProducts();

      return res.status(200).json({ data: products });
    } catch (err) {
      next(err);
    }
  };

  findProductById = async (req, res, next) => {
    try {
      const { productId } = req.params;

      // 서비스 계층에 구현된 findProductById 로직을 실행합니다.
      const product = await this.productsService.findProductById(productId);

      return res.status(200).json({ data: product });
    } catch (err) {
      next(err);
    }
  };

  createProduct = async (req, res, next) => {
    try {
      const { title, content } = req.body;
      const { id } = res.locals.user;

      if (!title || !content) throw new Error("InvalidParamsError");

      // 서비스 계층에 구현된 createProduct 로직을 실행합니다.
      const createProduct = await this.productsService.createProduct(title, content, id);

      return res.status(201).json({ data: createProduct });
    } catch (err) {
      next(err);
    }
  };

  updateProduct = async (req, res, next) => {
    try {
      const { productId } = req.params;
      const { title, content, status } = req.body;
      const { id } = res.locals.user;

      // 서비스 계층에 구현된 updateProduct 로직을 실행합니다.
      const updateProduct = await this.productsService.updateProduct(productId, title, content, status);

      return res.status(200).json({ data: updateProduct });
    } catch (err) {
      next(err);
    }
  };

  deleteProduct = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { id } = res.locals.user;

      // 서비스 계층에 구현된 deleteProduct 로직을 실행합니다.
      const deleteProduct = await this.productsService.deleteProduct(postId);

      return res.status(200).json({ data: deleteProduct });
    } catch (err) {
      next(err);
    }
  };
}
