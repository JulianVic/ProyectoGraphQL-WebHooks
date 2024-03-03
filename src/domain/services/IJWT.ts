export interface IJWT {
    sign(payload: any): Promise<string>;
    verify(token: string): Promise<any>;
};