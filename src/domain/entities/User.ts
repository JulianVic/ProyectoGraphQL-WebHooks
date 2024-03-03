import { Video } from './Video';

export class User {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly webhook: string,
        public readonly video?: Video[]
    ) { };
};