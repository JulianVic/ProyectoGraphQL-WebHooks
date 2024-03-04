import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repos/IUserRepo";
import { IBcrypt } from "../../domain/services/IBcrypt";
export class CreateUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly bcryptService: IBcrypt
    ) { };

    async run(name: string, email: string, password: string) : Promise<User>{
        const hashedPassword = await this.bcryptService.hash(password);
        const user = new User(name, email, hashedPassword);
        const createdUser = await this.userRepository.create(user);
        return createdUser;
    }
}