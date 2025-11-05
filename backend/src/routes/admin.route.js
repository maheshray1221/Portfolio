import { Router } from "express";
import {
    adminLogin,
    adminRegister,
    createAbout,
    createSkill,
    getAbout,
    getSkill,
    updateAbout,
    updateSkill
} from "../controller/admin.controller.js";
import { verifyJWT, } from "../middleware/auth.middleware.js"

import { upload } from "../middleware/multer.middleware.js";
const router = Router()
router.route("/register-admin").post(adminRegister)

router.route("/login-admin").post(adminLogin)

router.route("/about").post(verifyJWT, upload.single("imageUrl"), createAbout)

router.route("/getAbout").get(verifyJWT, getAbout)

router.route("/updateAbout/:id").put(verifyJWT, updateAbout)

router.route("/createSkill").post(verifyJWT, createSkill)

router.route("/updateSkill/:id").put(verifyJWT, updateSkill)

router.route("/getSkill").get(verifyJWT,getSkill)

export default router