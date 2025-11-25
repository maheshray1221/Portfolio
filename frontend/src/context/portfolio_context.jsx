import { createContext } from "react";
import { client } from "../utils/Client.js"

export const PortfolioContext = createContext({})

export const PortfolioProvider = ({ children }) => {

    // About
    const handleCreateAbout = async (FormData) => {
        try {
            const res = await client.post("/createAbout",
                FormData,
                {
                    withCredentials: true,
                }
            )

            if (res.status === 200) {
                console.log(res.data.message)
            }
            return res.data

        } catch (error) {
            throw error
        }
    }

    const getAbout = async () => {
        try {
            let res = await client.get("/getAbout", { withCredentials: true }
            )
            if (res.status === 200) {
                console.log(res.data)
            }
            return res.data
        } catch (err) {
            throw err
        }
    }

    const UpdateAbout = async (FormData) => {
        let res = await client.put("/updateAbout/:id", {
            FormData
        }, { withCredentials: true })

        if (res.status === 200) {
            console.log(res.data)
        }
        return res.data
    }

    // handleCreateSkill
    const createSkill = async (skill) => {
        try {
            const res = await client.post("/createSkill", {
                skill
            },
                { withCredentials: true })

            if (res.status === 200) {
                console.log(res.data)
            }

        } catch (error) {
            throw error
        }
    }
    // handleGetSkill
    // handleUpdateSkill


    // handleCreateProject
    const handleCreateProject = async (
        title,
        description,
        videoUrl,
        technologies,
        githubLink,
        ProjectLink
    ) => {
        try {
            const res = await client.post("/createProject", {
                title,
                description,
                videoUrl,
                technologies,
                githubLink,
                ProjectLink
            })

            if (res.status === 200) {
                console.log(res.data)
            }

        } catch (error) {
            throw error
        }
    }
    // handleGetProject
    // handleUpdateProject

    // handleCreateExperience
    const handleCreateExperience = async (
        jobTitle,
        description,
        imageUrl,

    ) => {
        try {
            const res = await client.post("/createExperience", {
                jobTitle,
                description,
                imageUrl,
            })

            if (res.status === 200) {
                console.log(res.data)
            }

        } catch (error) {
            throw error
        }
    }
    // handleGetExperience
    // handleUpdateExperience


    const data = {
        handleCreateAbout,
        getAbout,
        UpdateAbout,
        createSkill,
        handleCreateProject,
        handleCreateExperience
    }
    return (
        <PortfolioContext.Provider value={data}>
            {children}
        </PortfolioContext.Provider>
    )
}

