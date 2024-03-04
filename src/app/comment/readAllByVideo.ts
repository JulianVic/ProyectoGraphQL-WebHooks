import { Comment } from "../../domain/entities/Comment";
import { ICommentRepository } from "../../domain/repos/ICommentRepo";

export class ReadAllByVideoUseCase {
    constructor(
        private readonly commentRepository: ICommentRepository
    ) { };

    async run(id: string): Promise<Comment[] | null> {
        const comments = await this.commentRepository.readAllByVIdeo(id);
        return comments;
    }
}