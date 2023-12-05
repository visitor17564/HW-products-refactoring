export class UsersRepository {
  constructor(prisma) {
    // 생성자에서 전달받은 Prisma 클라이언트의 의존성을 주입합니다.
    this.prisma = prisma;
  }

  /** 내 정보조회 */
  findUsersById = async (id) => {
    // ORM인 Prisma에서 Users 모델의 findUnique 메서드를 사용해 데이터를 요청
    const users = await this.prisma.users.findUnique({
      where: { id: +id }
    });

    return users;
  };

  /** 회원가입 */
  createUser = async (email, password) => {
    // ORM인 Prisma에서 Users 모델의 create 메서드를 사용해 데이터를 요청
    const createdUser = await this.prisma.users.create({
      data: {
        email,
        password
      }
    });

    return createdUser;
  };

  /** 내 정보수정 */
  updateUser = async (id, password) => {
    // ORM인 Prisma에서 Users 모델의 update 메서드를 사용해 데이터를 수정
    const updateUser = await this.prisma.users.update({
      where: {
        id: +id
      },
      data: {
        password
      }
    });

    return updateUser;
  };

  /** 회원탈퇴 */
  deleteUser = async (id, password) => {
    // ORM인 Prisma에서 Users 모델의 delete 메서드를 사용해 데이터를 삭제
    const deleteUser = await this.prisma.users.delete({
      where: {
        id: +id,
        password
      }
    });

    return deleteUser;
  };
}
