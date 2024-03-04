import { Video } from '../entities/Video';

export interface IVideoRepository {
    create(video: Video): Promise<Video>;
    readById(id: string): Promise<Video | null>;
    readAllByUser(userId: string): Promise<Video[]>;
    readAll(): Promise<Video[]>;
};