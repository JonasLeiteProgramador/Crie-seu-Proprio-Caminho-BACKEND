import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs';
import { ImageServices } from '../services/Image.service.js';

const parser = multer({ dest: 'public/uploads/' });

const instanceServiceImage = new ImageServices();


const resizeImage = async (inputPath, outputPath) => {

    const tempOutputPath = `${outputPath}.temp`;


    await sharp(inputPath)
        .resize({ height: 750, width: 750, fit: 'inside' })
        .toFile(tempOutputPath);

    await fs.promises.rename(tempOutputPath, outputPath);
}

export const createImage = (req, res, next) => {
    console.log('Iniciando processamento de imagem...');
    parser.single('image')(req, res, async err => {
        if (err) {
            console.error('Erro ao processar imagem:', err);
            res.status(500).json({ message: 'Não foi possível processar a imagem', error: 1, payload: err.message });
            return;
        }

        console.log('Processamento da imagem concluído.tamo  Criando  a imagem...');
        
        const { projectId } = req.body; 
         
          
          if (!req.file) {
            console.error('Nenhum arquivo enviado');
            res.status(400).json({ message: 'Nenhum arquivo enviado' });
            return;
        }


        
        const inputPath = req.file.path;

        const outputPath = `public/uploads/${req.file.filename}`;

        const supportedFormats = ['jpeg', 'png', 'webp'];

        const format = req.file.originalname.split('.').pop().toLowerCase();
        
        if (!supportedFormats.includes(format)) {
            console.error('Formato de imagem não suportado');
            res.status(400).json({ message: 'Formato de imagem não suportado' });
            return;
        }

        await resizeImage(inputPath, outputPath);


        const imageCreated = await instanceServiceImage.serviceCreateImage(req.file.filename, `/uploads/${req.file.filename}`,projectId);

        console.log('Imagem criada com sucesso:', imageCreated);

        res.status(200).json({ error: 0, payload: { id: req.file.filename, url: `/uploads/${req.file.filename}` } });

    });
}


export const getAllImages = async (req,res) => {
     const allImages = await instanceServiceImage.serviceReadAllImages()
     res.status(201).json({allImages})
}


export const  deleteImage  = async(req,res) =>{
    const {id} = req.params;

    const deletedImage = instanceServiceImage.serviceDeleteImage(id)
    res.status(200).json({deletedImage})
}