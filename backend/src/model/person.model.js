import mongoose from "mongoose"

const PersonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        jobTitle: {
            type: String,

        },
        imageUrl: {
            type: String,
            required: true,
        },
        links: {
            type: [String],
            required: true,
        },
        workfor: {
            type: String,
            required: true,
        },
        knowsAbout: {
            type: [String],
            required: true,
        }
    },
    { timestamps: true }
)

const Person = mongoose.model("Person", PersonSchema)


export default Person