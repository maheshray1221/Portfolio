import { asyncHandler } from "../utils/AsyncHandler.js";
import Person from "../model/person.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getPerson = asyncHandler(async (req, res) => {
    const user = await Person.findOne()

    if (!user) {
        throw new ApiError(401, "user data not found")
    }

    return res
        .status(200)
        .json(new ApiResponse(
            201,
            user,
            "Person data successfully fetched"
        ))
})


export default getPerson