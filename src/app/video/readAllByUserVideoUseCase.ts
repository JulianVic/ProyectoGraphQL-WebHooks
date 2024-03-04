import { IVideoRepository } from "../../domain/repos/IVideoRepo";
import { Video } from "../../domain/entities/Video";

export class ReadByUserUseCase {
    constructor(
        private readonly videoRepository: IVideoRepository,
    ) { };

    async run(userId: string): Promise<Video[]>{
        const videos = await this.videoRepository.readAllByUser(userId);
        return videos;
    }
}