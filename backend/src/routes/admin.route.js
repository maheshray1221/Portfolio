import { Router } from "express";
import {
    adminLogin,
    adminRegister,
    checkAuth,
    createAbout,
    createContact,
    createExperience,
    createProject,
    createSkill,
    getAbout,
    getContact,
    getExperience,
    getProject,
    getSkill,
    updateAbout,
    updateExperience,
    updateProject,
    updateSkill
} from "../controller/admin.controller.js";
import { verifyJWT, } from "../middleware/auth.middleware.js"

import { upload } from "../middleware/multer.middleware.js";
const router = Router()
router.route("/register-admin").post(adminRegister)

router.route("/login-admin").post(adminLogin)

router.route("/check-auth").get(verifyJWT, checkAuth)

router.route("/createAbout").post(verifyJWT, upload.single("imageUrl"), createAbout)

router.route("/getAbout").get(verifyJWT, getAbout)

router.route("/updateAbout/:id").put(verifyJWT, upload.single("imageUrl"), updateAbout)

router.route("/createSkill").post(verifyJWT, createSkill)

router.route("/updateSkill/:id").put(verifyJWT, updateSkill)

router.route("/getSkill").get(verifyJWT, getSkill)

router.route("/createExperience").post(verifyJWT, upload.single("imageUrl"), createExperience)

router.route('/getExperience').get(verifyJWT, getExperience)

router.route("/updateExperience/:id").put(verifyJWT, upload.single("imageUrl"), updateExperience)

router.route("/getProject").get(verifyJWT, getProject)

router.route("/createProject").post(verifyJWT, upload.single("videoUrl"), createProject)

router.route("/updateProject/:id").put(verifyJWT, upload.single("videoUrl"), updateProject)

router.route("/getContact").get(verifyJWT, getContact)

router.route("/createContact").post(verifyJWT, createContact)


export default router