import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Skill from "../model/skill.model.js";

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


export default getSkill