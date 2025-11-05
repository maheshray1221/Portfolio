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
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        }
    },
    { timestamps: true }
)

const Experience = mongoose.model("Experience", ExperienceSchema)


export default Experience