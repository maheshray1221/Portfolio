import mongoose from "mongoose";
import About from "../model/about.model.js";
import { Admin } from "../model/Admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import Skill from "../model/skill.model.js";
import Experience from "../model/experience.model.js";
import Project from "../model/project.model.js";
import Contact from "../model/contact.model.js";
// generate AccessToken And refreshToken
const generateAccessAndRefreshToken = async (adminId) => {
    // find user by id
    const admin = await Admin.findById(adminId)

    // generate access and refresh token 
    const accessToken = admin.generateAccessToken()
    const refreshToken = admin.generateRefreshToken()
    admin.refreshToken = refreshToken

    await admin.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }
}

// Admin register
const adminRegister = asyncHandler(async (req, res) => {
    // data lo frontend se
    const { username, email, password } = req.body
    console.log("email : ", email)

    // validation for not empty 
    if (
        [username, email, password].some((filed) => filed?.trim() === "")
    ) {
        throw new ApiError(401, "user details are empty")
    }

    //check user allready exist useing email or username 
    const existUser = await Admin.findOne({ $or: [{ email }, { username }] })

    if (existUser) {
        throw new ApiError(401, "user are all ready exist..")
    }

    // crate user object 
    const admin = await Admin.create(
        {
            username: username.toLowerCase(),
            email,
            password,
            role: "admin"
        }
    )

    // remove password and refresh token 
    const createAdmin = await Admin.findById(admin._id)
        .select("-password -refreshToken")

    // validation check for create admin 
    if (!createAdmin) {
        throw new ApiError(404, "somthing went wrong while creating the admin ")
    }

    console.log("admin :", createAdmin)
    return res
        .status(200)
        .json(
            new ApiResponse(201, createAdmin, "registerd admin successfully ")
        )
})

const adminLogin = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body

    // check user details found or not 
    if (!username && !email) {
        throw new ApiError(401, "user credentials are not found")
    }
    const admin = await Admin.findOne({ $or: [{ username }, { email }] })

    // check admin found or not 
    if (!admin) {
        throw new ApiError(401, "user does not exist")
    }
    console.log("password", password)
    // check password right or wrong
    const isPasswordValid = await admin.isPasswordCorrect(password)


    // if not match password 

    if (!isPasswordValid) {
        throw new ApiError(401, "admin password are wrong")
    }

    // send accessToken and refreshToken
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(admin._id)

    // remove password and refresh Token 
    const logedInAdmin = await Admin.findById(admin._id).select("-password -refreshToken")
    console.log("logIn Admin :", logedInAdmin)

    // send cokie
    const options = {
        httpOnly: true,
        secure: true,
    }
    // res
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(
            201,
            {
                admin: refreshToken, accessToken, logedInAdmin
            },
            "Admin successfully loged In "
        ))
})

const createAbout = asyncHandler(async (req, res) => {

    const { name, jobTitle, SocialLinks, workfor, knowsAbout } = req.body

    if ([name, jobTitle, SocialLinks, workfor, knowsAbout].some((filed) =>
        filed?.trim() === "")
    ) {
        throw new ApiError(401, "about details are empty")
    }

    const imageLocalPath = req.file?.path;

    if (!imageLocalPath) {
        throw new ApiError(400, "image file is required");
    }

    const profileImage = await uploadOnCloudinary(imageLocalPath);

    if (!profileImage) {
        throw new ApiError(400, "profileImage file is required");
    }

    const about = await About.create({
        name,
        jobTitle,
        imageUrl: req.file.path,
        SocialLinks,
        workfor,
        knowsAbout,
        createdBy: req.admin._id,
    })
    return res.status(200)
        .json(new ApiResponse(
            200,
            about,
            "about section created successfully"
        ))

})

const getAbout = asyncHandler(async (req, res) => {
    const about = await About.findOne()

    if (!about) {
        throw new ApiError(401, "user data not found")
    }
    console.log("about : ", about)
    return res
        .status(200)
        .json(new ApiResponse(
            200,
            about,
            "Person data successfully fetched"
        ))
})

const updateAbout = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const {
        name,
        jobTitle,
        SocialLinks,
        workfor,
        knowsAbout
    } = req.body;

    if ([name, jobTitle, SocialLinks, workfor, knowsAbout].some((filed) =>
        filed?.trim() === "")
    ) {
        throw new ApiError(401, "all fields are required")
    }

    const imageLocalPath = req.file?.path

    if (!imageLocalPath) {
        throw new ApiError(400, "imagelocalPath are required")
    }
    const profileImage = await uploadOnCloudinary(imageLocalPath)

    if (!profileImage) {
        throw new ApiError(400, "error while upload on cloudinary ")
    }

    const newAbout = await About.findByIdAndUpdate(id, {
        name,
        jobTitle,
        SocialLinks,
        workfor,
        knowsAbout,
        imageUrl: req.file.path
    }, { new: true, runValidators: true })

    return res
        .status(200)
        .json(new ApiResponse(200, newAbout, "about successfully updated"))
})

const getSkill = asyncHandler(async (req, res) => {

    const skills = await Skill.find()

    if (!skills) {
        throw new ApiError(401, "skills array not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(
            201,
            skills,
            "successfully found skills "
        ))

})

const createSkill = asyncHandler(async (req, res) => {
    const { skill } = req.body
    if (!skill) {
        throw new ApiError(401, "skill are required")
    }

    const addSkill = await Skill.create({
        skill,
        createdBy: req.admin._id
    })

    return res.status(200)
        .json(200, addSkill, "skill add successfully")
})

const updateSkill = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { skill } = req.body
    if (!id) {
        throw new ApiError(401, "id required")
    }
    const updateData = await Skill.findByIdAndUpdate(id, {
        skill
    }, { new: true, runValidators: true })

    return res.status(200)
        .json(new ApiResponse(200, updateData, "skill updated successfully "))
})

const createExperience = asyncHandler(async (req, res) => {
    const { jobTitle, description } = req.body

    if ([jobTitle, description].some((filed) => filed.trim() === "")) {
        throw new ApiError(401, "all fileds are required")
    }
    const image = req.file?.path

    if (!image) {
        throw new ApiError(401, "image path required")
    }
    const jobImage = await uploadOnCloudinary(image)

    if (!jobImage) {
        throw new ApiError(401, "jobImage is empty")
    }

    const experienceData = Experience.create({
        jobTitle,
        description,
        imageUrl: req.file.path,
        createdBy: req.admin._id
    })

    return res
        .status(200)
        .json(new ApiResponse(200, experienceData, "create expreanc successfully"))
})

const getExperience = asyncHandler(async (req, res) => {

    const userExperience = await Experience.find()

    if (!userExperience) {
        throw new ApiError(401, "User experience not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(201, userExperience, "user experience successfully found"))
})

const updateExperience = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new ApiError(401, "id are required")
    }
    const { jobTitle, description } = req.body

    if ([jobTitle, description].some((filed) => filed.trim() === "")) {
        throw new ApiError(401, "all fileds are required")
    }

    const image = req.file?.path

    if (!image) {
        throw new ApiError(401, "image path required")
    }
    const jobImage = await uploadOnCloudinary(image)

    if (!jobImage) {
        throw new ApiError(401, "jobImage is empty")
    }

    const updatedData = await Experience.findByIdAndUpdate(id,
        {
            jobTitle,
            description,
            imageUrl: req.file.path
        },
        { new: true, runValidators: true }
    )

    return res
        .status(200)
        .json(new ApiResponse(200, updatedData, "Experience updated successfully "))
})

const getProject = asyncHandler(async (req, res) => {
    const projectDetails = await Project.find()

    if (!projectDetails) {
        throw new ApiError(401, "User ProjectDetails not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(201,
            projectDetails,
            "user ProjectDetails successfully found"
        ))
})

const createProject = asyncHandler(async (req, res) => {
    const { title, description, technologies, githubLink, ProjectLink } = req.body

    if ([title, description, technologies, githubLink, ProjectLink].some((filed) => filed.trim() === "")) {
        throw new ApiError(401, "all fileds are empty")
    }
    const videolocalPath = req.file?.path

    if (!videolocalPath) {
        throw new ApiError(401, "video url are required")
    }
    const videolink = await uploadOnCloudinary(videolocalPath)

    if (!videolink) {
        throw new ApiError(400, "videoUrl are empty ")
    }

    const ProjectData = await Project.create({
        title,
        description,
        technologies,
        githubLink,
        ProjectLink,
        videoUrl: req.file.path,
        createdBy: req.admin._id
    })

    return res
        .status(200)
        .json(new ApiResponse(200, ProjectData, "Create project successfully "))
})

const updateProject = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new ApiError(400, "id required")
    }

    const { title, description, technologies, githubLink, ProjectLink } = req.body

    if ([title, description, technologies, githubLink, ProjectLink].some((filed) => filed.trim() === "")) {
        throw new ApiError(401, "all fileds are empty")
    }

    const videolocalPath = req.file?.path

    if (!videolocalPath) {
        throw new ApiError(401, "video url are required")
    }
    const videolink = await uploadOnCloudinary(videolocalPath)

    if (!videolink) {
        throw new ApiError(400, "videoUrl are empty ")
    }

    const projectData = Project.findByIdAndUpdate(id,
        {
            title,
            description,
            technologies,
            githubLink,
            ProjectLink,
            videoUrl: req.file.path
        }, { new: true, runValidators: true }
    )

    return res
        .status(200)
        .json(new ApiResponse(200, projectData, "project successfully updated"))
})

const getContact = asyncHandler(async (req, res) => {
    const details = await Contact.find()

    if (!details) {
        throw new ApiError(401, "contact details not found")
    }
    console.log("get message successfully ")
    return res
        .status(200)
        .json(new ApiResponse(201, details, "contact details successfully found"))
})

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phoneNumber, message } = req.body

    if (!phoneNumber) {
        throw new ApiError(400, "phone number required")
    }
    if ([name, email, message].some((filed) => filed.trim() === "")) {
        throw new ApiError(401, "all fileds are required")
    }

    const ContactDetails = await Contact.create({
        name,
        email,
        phoneNumber,
        message,
        createdBy: email
    })
    console.log("message send successfully ")
    return res
        .status(200)
        .json(new ApiResponse(200, ContactDetails, "contact created successfullylk "))
})

export {
    adminRegister,
    adminLogin,
    createAbout,
    getAbout,
    updateAbout,
    getSkill,
    createSkill,
    updateSkill,
    createExperience,
    getExperience,
    updateExperience,
    getProject,
    createProject,
    updateProject,
    getContact,
    createContact
}