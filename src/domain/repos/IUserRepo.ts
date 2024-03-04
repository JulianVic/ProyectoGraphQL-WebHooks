import { User } from "../entities/User";
export interface IUserRepository {
    create(user: User): Promise<User>;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<void>;
};