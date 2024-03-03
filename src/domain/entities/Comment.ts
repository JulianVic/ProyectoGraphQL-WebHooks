import { User } from './User';
import { Video } from './Video';
export class Comment {
    constructor(
        public readonly id: number,
        public readonly body: string,
        public readonly user: User, // author of the comment
        public readonly video: Video
    ) { };
};