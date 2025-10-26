import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        videoUrl:{
            type: String,
            required: true,
        },
        technologies:{
            type: String,
            required: true,
        },
        links:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Person"
        }
    },
    { timestamps: true }
)

const Project = mongoose.model("Project",ProjectSchema)


export default Project