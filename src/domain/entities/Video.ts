import { Comment } from "./Comment";

export class Video {
    constructor(
        public readonly title: string,
        public readonly description: string,
        public readonly id?: number,
        public readonly comments?: Comment[]
    ) { };
};