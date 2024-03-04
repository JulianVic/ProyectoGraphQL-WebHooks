import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repos/IUserRepo";

export class GetAllUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository
    ) { };

    async run(): Promise<User[] | null> {
        const users = await this.userRepository.getAll();
        return users;
    }
}