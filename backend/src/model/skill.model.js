import mongoose from "mongoose"

const SkillSchema = new mongoose.Schema(
    {
        skill: {
            type: [String],
            required: true
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

const Skill = mongoose.model("Skill", SkillSchema)


export default Skill