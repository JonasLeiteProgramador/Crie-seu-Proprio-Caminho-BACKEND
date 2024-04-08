import { Router } from 'express';
import { imageRoutes } from './images.routes.js';
import { projectRoutes } from './project.routes.js';


const routes = Router();

routes.use('/images', imageRoutes);
routes.use('/projects',projectRoutes)



routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

export { routes };
