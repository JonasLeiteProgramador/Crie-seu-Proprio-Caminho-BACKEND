import { Router } from 'express'
import { createProject, deleteProject, projectDetails, readProjects, updateProject } from '../controller/project.cotroller.js'


const projectRoutes = Router()


projectRoutes.post('/create',createProject)


projectRoutes.get('/show-all',readProjects)


projectRoutes.get('/show-especific/:id',projectDetails)


projectRoutes.put('/update/:id',updateProject)


projectRoutes.delete('/delete/:id',deleteProject)


export { projectRoutes}