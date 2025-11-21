import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const AdminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user"
        },
        RefreshToken: {
            type: String,
        }
    },
    { timestamps: true }
)



AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

AdminSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

AdminSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            // paylod
            _id: this._id,
            username: this.username,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

AdminSchema.methods.generateRefreshToken =  function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Admin = mongoose.model("Admin", AdminSchema)