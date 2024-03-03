import { Video } from '../entities/Video';

export interface IVideoRepo {
    create(video: Video): Promise<Video>;
    getById(id: string): Promise<Video | null>;
    getAllByUser(userId: string): Promise<Video[]>;
    getAll(): Promise<Video[]>;
    delete(id: string): Promise<void>;
};