export class Comment {
    constructor(
        public readonly body: string,
        public readonly authorId: string,
        public readonly videoId: string,
        public readonly id?: string
    ) { };
};