import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Project from "../model/project.model.js";

const getProjectDetails = asyncHandler(async (req, res) => {

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

export default getProjectDetails