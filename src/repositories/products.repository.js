export class ProductsRepository {
  constructor(prisma) {
    // 생성자에서 전달받은 Prisma 클라이언트의 의존성을 주입합니다.
    this.prisma = prisma;
  }

  /** 전체 상품조회 */
  findAllProducts = async () => {
    // ORM인 Prisma에서 Products 모델의 findMany 메서드를 사용해 데이터를 요청
    const products = await this.prisma.products.findMany();

    return products;
  };

  /** 개별 상품조회 */
  findProductsById = async (productId) => {
    // ORM인 Prisma에서 products 모델의 findUnique 메서드를 사용해 데이터를 요청
    const products = await this.prisma.products.findUnique({
      where: { productId: +productId }
    });

    return products;
  };

  /** 상품등록 */
  createProduct = async (title, content, id) => {
    // ORM인 Prisma에서 Posts 모델의 create 메서드를 사용해 데이터를 요청
    const createdProduct = await this.prisma.products.create({
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
    const updatedProduct = await this.prisma.products.update({
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
    const deleteProduct = await this.prisma.products.delete({
      where: {
        productId: +productId
      }
    });

    return deleteProduct;
  };
}
