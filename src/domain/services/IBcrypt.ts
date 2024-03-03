export interface IBcrypt {
    hash(password: string, salt: string): Promise<string>;
    compare(password: string, hashedPassword: string): Promise<boolean>;
};