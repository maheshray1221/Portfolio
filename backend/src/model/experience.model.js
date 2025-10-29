import mongoose from "mongoose"

const ExperienceSchema = new mongoose.Schema(
    {
        jobTitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        }
    },
    { timestamps: true }
)

const Experience = mongoose.model("Experience", ExperienceSchema)


export default Experience