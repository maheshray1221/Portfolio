import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Contact from "../model/contact.model.js";


const getContactDetails = asyncHandler(async (req, res) => {

    const details = await Contact.find()

    if (!details) {
        throw new ApiError(401, "contact details not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(201, details, "contact details successfully found"))
})

export default getContactDetails