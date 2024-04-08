    import { Router } from "express";
    import { createImage, deleteImage, getAllImages} from "../controller/image.controller.js";

    const imageRoutes = Router({ mergeParams: true });

    imageRoutes.post('/create/:id', createImage);

    imageRoutes.delete('/delete/:id',deleteImage)

    imageRoutes.get('/get',getAllImages)

    export { imageRoutes };

