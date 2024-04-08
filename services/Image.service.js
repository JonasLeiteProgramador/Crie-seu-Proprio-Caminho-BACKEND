import { imageEntity } from "../entity/image.entity.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

export class ImageServices {
    serviceCreateImage = async (fileName, url, projectId) => {
        try {
            
        
            const newImage = await imageEntity.create({
                fileName,
                url,
                projectId 
            });

            return { message: `Imagem ${SUCCESS.CREATED}`, newImage };
        } catch (error) {
            console.log('Não foi possível criar a imagem no banco de dados!', error);
            throw error;
        }
    }

    async serviceReadAllImages() {
        try {
            const images = await imageEntity.findAll();
            return images;
        } catch (error) {
            console.log('Não foi possivel retornar as mensagens', error);
            throw error;
        }
    }

    async serviceDeleteImage(id) {
        try {
            const imageFinded = await imageEntity.findByPk(id);
            if (!imageFinded) {
                return `Imagem ${ERRORS.NOT_FOUND}`;
            }
            await imageEntity.destroy({
                where: { id }
            });
            return `Imagem ${SUCCESS.DELETED}`;
        } catch (error) {
            console.log('Não foi possivel apagar a imagem!', error);
            throw error;
        }
    }
}
