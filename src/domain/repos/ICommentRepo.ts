import { Comment } from '../entities/Comment';

export interface ICommentRepository {
    create(comment: Comment): Promise<Comment>;
    readAllByVIdeo(videoId: string): Promise<Comment[] | null>;
};
