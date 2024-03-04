import { IUserRepository } from "../../domain/repos/IUserRepo";
import { User } from "../../domain/entities/User";

export class DeleteUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository,
    ) { };
    
    async run(id: string) : Promise<void>{
        await this.userRepository.delete(id);
    }
}