import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        technologies: {
            type: String,
            required: true,
        },
        githubLink: {
            type: String,
            required: true,
            trim: true
        },
        ProjectLink: {
            type: String,
            required: true,
            trim: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        }
    },
    { timestamps: true }
)

const Project = mongoose.model("Project", ProjectSchema)


export default Project