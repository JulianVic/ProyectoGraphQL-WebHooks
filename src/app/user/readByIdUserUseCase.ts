import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repos/IUserRepo";

export class GetByIdUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository
    ) { };

    async run(id: string): Promise<User | null> {
        const user = await this.userRepository.getById(id);
        return user;
    }
}