export class ProductsService {
  constructor(postsRepository) {
    // 생성자에서 전달받은 PostsRepository 의존성을 주입합니다.
    this.postsRepository = postsRepository;
  }
}
