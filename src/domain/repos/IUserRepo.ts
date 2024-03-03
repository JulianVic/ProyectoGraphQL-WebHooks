import { User } from "../entities/User";
export interface IUserRepository {
    create(user: User): Promise<User>;
    getById(id: string): Promise<User | null>;
    getAll(): Promise<User[]>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<boolean>;
};