import { Comment } from '../entities/Comment';

export interface ICommentRepo {
    create(comment: Comment): Promise<Comment>;
    getById(id: string): Promise<Comment | null>;
    getAllByVIdeo(videoId: string): Promise<Comment[]>;
};
