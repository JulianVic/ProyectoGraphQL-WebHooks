import { IUserRepository } from "../../domain/repos/IUserRepo";
import { User } from "../../domain/entities/User";

export class UpdateUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository,
    ) { };

    async run(name: string, email: string, password: string): Promise<User>{
        const user = new User(name, email, password);
        const updatedUser = await this.userRepository.update(user);
        return updatedUser;
    }
}