export class UsersController {
  constructor(usersService) {
    // 생성자에서 전달받은 PostsService의 의존성을 주입합니다.
    this.usersService = usersService;
  }
}
