import { ICommentRepository } from "../../domain/repos/ICommentRepo";
import { IJWT } from "../../domain/services/IJWT";
import { Comment } from "../../domain/entities/Comment";

export class CreateCommentUseCase {
    constructor(
        private readonly commentRepository: ICommentRepository,
        private readonly jwtService: IJWT
    ) { };
    
    async run(body: string, authorId: string, videoId: string) : Promise<Comment>{
        const comment = new Comment(body, authorId, videoId);
        const createdComment = await this.commentRepository.create(comment);
        return createdComment;
    }
}