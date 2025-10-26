import mongoose from "mongoose"

const ExperienceSchema = new mongoose.Schema(
    {
        
    },
    { timestamps: true }
)

const Experience = mongoose.model("Experience",ExperienceSchema)


export default Experience