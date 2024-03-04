import { Video } from '../entities/Video';

export interface IVideoRepository {
    create(video: Video): Promise<Video>;
    readAllByUser(userId: string): Promise<Video[]>;
    readById(id: string): Promise<Video | null>;
    readAll(): Promise<Video[]>;
};