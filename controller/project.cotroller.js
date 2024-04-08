
import { ProjectService } from "../services/project.service.js";


const instanceServiceProject = new ProjectService()

export const createProject = async (req, res) => {

    const { title, description, email, technologies, contactNumber } = req.body;

    const project = await instanceServiceProject.createProject(
        title, description, email, technologies, contactNumber
    )

    res.status(201).json({project })

}


export const readProjects = async (req, res) => {
    const projects = await instanceServiceProject.readProject()
    res.status(201).json({ projects })
}



export const projectDetails = async (req, res) => {
    const { id } = req.params;
    const projectDetail = await instanceServiceProject.getProjectDetails(id)
    res.status(201).json({ projectDetail })
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    const deletedProject = await instanceServiceProject.deleteProject(id)
    res.status(200).json({ deletedProject })

}


export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, description, email, technologies, contactNumber } = req.body;
    const updatedProject = await instanceServiceProject.updateProject(id, title, description, email, technologies, contactNumber)
    res.status(201).json({ updatedProject })
}