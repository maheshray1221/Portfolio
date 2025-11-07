import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,

        },
        message: {
            type: String,
            required: true,
            minlength: [5, "message must be at least 5 chacters long"],
            maxlength: [200, "message can't exceed 200 charcters"]
        },
        createdBy: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

const Contact = mongoose.model("Contact", ContactSchema)


export default Contact