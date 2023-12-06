import { prisma } from "../utils/prisma/index.js";
export class ProductsRepository {
  /** 전체 상품조회 */
  findAllProducts = async () => {
    // ORM인 Prisma에서 Products 모델의 findMany 메서드를 사용해 데이터를 요청
    const products = await prisma.Products.findMany();

    return products;
  };

  /** 개별 상품조회 */
  findProductsById = async (productId) => {
    // ORM인 Prisma에서 products 모델의 findUnique 메서드를 사용해 데이터를 요청
    const products = await prisma.Products.findUnique({
      where: { productId: +productId }
    });

    return products;
  };

  /** 상품등록 */
  createProduct = async (title, content, id) => {
    // ORM인 Prisma에서 Posts 모델의 create 메서드를 사용해 데이터를 요청
    const createdProduct = await prisma.Products.create({
      data: {
        title,
        content,
        author: +id
      }
    });

    return createdProduct;
  };

  /** 상품수정 */
  updateProduct = async (productId, title, content, status) => {
    // ORM인 Prisma에서 Posts 모델의 update 메서드를 사용해 데이터를 수정
    const updatedProduct = await prisma.Products.update({
      where: {
        productId: +productId
      },
      data: {
        title,
        content,
        status
      }
    });

    return updatedProduct;
  };

  /** 상품삭제 */
  deleteProduct = async (productId) => {
    // ORM인 Prisma에서 Posts 모델의 delete 메서드를 사용해 데이터를 삭제
    const deleteProduct = await prisma.Products.delete({
      where: {
        productId: +productId
      }
    });

    return deleteProduct;
  };
}
