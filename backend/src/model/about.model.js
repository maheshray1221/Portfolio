import mongoose from "mongoose"

const AboutSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        jobTitle: {
            type: String,

        },
        imageUrl: {
            type: String,  // cloudinary url
            public_id: { type: String },
            url: { type: String },
            required: true
        },
        SocialLinks: {
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
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            unique:true,
            required: true,
        }

    },
    { timestamps: true }
)

const About = mongoose.model("About", AboutSchema)


export default About