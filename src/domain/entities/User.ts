import { Video } from './Video';

export class User {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly id?: number,
        public readonly video?: Video[]
    ) { };
};