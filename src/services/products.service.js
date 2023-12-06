import { ProductsRepository } from "../repositories/products.repository.js";

export class ProductsService {
  productsRepository = new ProductsRepository();

  findAllProducts = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const products = await this.productsRepository.findAllProducts();
    if (!products) throw new Error("NoProduct");

    // 호출한 Post들을 가장 최신 게시글 부터 정렬합니다.
    products.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return products.map((product) => {
      return {
        productId: product.productId,
        author: product.author,
        title: product.title,
        content: product.content,
        status: product.status,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
      };
    });
  };

  findProductById = async (productId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const product = await this.productsRepository.findProductsById(productId);
    if (!product) throw new Error("NoProduct");

    return {
      productId: product.productId,
      author: product.author,
      title: product.title,
      content: product.content,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    };
  };

  createProduct = async (title, content, id) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createProduct = await this.productsRepository.createProduct(title, content, id);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      productId: createProduct.productId,
      author: createProduct.author,
      title: createProduct.title,
      content: createProduct.content,
      status: createProduct.status,
      createdAt: createProduct.createdAt,
      updatedAt: createProduct.updatedAt
    };
  };

  updateProduct = async (productId, title, content, status, id) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const product = await this.productsRepository.findProductsById(productId);
    if (!product) throw new Error("NoProduct");
    if (product.author !== id) throw new Error("NoPermission");

    // 저장소(Repository)에게 데이터 수정을 요청합니다.
    await this.productsRepository.updateProduct(productId, title, content, status);

    // 변경된 데이터를 조회합니다.
    const updateProduct = await this.productsRepository.findProductsById(productId);

    return {
      productId: updateProduct.productId,
      author: updateProduct.author,
      title: updateProduct.title,
      content: updateProduct.content,
      status: updateProduct.status,
      createdAt: updateProduct.createdAt,
      updatedAt: updateProduct.updatedAt
    };
  };

  deleteProduct = async (id, productId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const product = await this.productsRepository.findProductsById(productId);
    if (!product) throw new Error("NoProduct");
    if (product.author !== id) throw new Error("NoPermission");

    // 저장소(Repository)에게 데이터 삭제를 요청합니다.
    await this.productsRepository.deletePost(productId);

    return {
      productId: product.productId,
      author: product.author,
      title: product.title,
      content: product.content,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    };
  };
}
