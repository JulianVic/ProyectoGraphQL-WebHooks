import { IVideoRepository } from "../../domain/repos/IVideoRepo";
import { Video } from "../../domain/entities/Video";

export class ReadByIdVideoUseCase {
    constructor(
        private readonly videoRepository: IVideoRepository,
    ) { };

    async run(id: string): Promise<Video | null>{
        const video = await this.videoRepository.readById(id);
        return video;
    }
}