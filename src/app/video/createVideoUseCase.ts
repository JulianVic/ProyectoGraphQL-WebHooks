import { IVideoRepository } from "../../domain/repos/IVideoRepo";
import { Video } from "../../domain/entities/Video";

export class CreateVideoUseCase {
    constructor(
        private readonly videoRepository: IVideoRepository,
    ) { };
    
    async run(title: string, description: string, token: string) : Promise<Video>{
        const video = new Video(title, description);
        const createdVideo = await this.videoRepository.create(video);
        return createdVideo;
    }
}