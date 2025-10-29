import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Experience from "../model/experience.model.js";

const getExperience = asyncHandler(async (req, res) => {

    const userExperience = await Experience.find()

    if (!userExperience) {
        throw new ApiError(401, "User experience not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(201, userExperience, "user experience successfully found"))
})

export default getExperience