import { Children } from "react";
import { createContext } from "react";
import { client } from "../utils/Client.js"

export const PortfolioContext = createContext({})

export const PortfolioProvider = ({ children }) => {

    // handleCreateAbout
    const handleCreateAbout = async (
        name,
        jobTitle,
        imageUrl,
        SocialLinks,
        workfor,
        knowsAbout
    ) => {
        try {
            const res = await client.post("/createAbout", {
                name,
                jobTitle,
                imageUrl,
                SocialLinks,
                workfor,
                knowsAbout
            })

            if (res.status === 200) {
                console.log(res.data)
            }

        } catch (error) {
            throw error
        }
    }

    // handleGetAbout
    
    // handleUpdateAbout

    // handleCreateSkill
    const handleCreateSkill = async (skill) => {
        try {
            const res = await client.post("/createSkill", { skill })

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
        handleCreateSkill,
        handleCreateProject,
        handleCreateExperience
    }
    return (
        <PortfolioContext.Provider value={data}>
            {children}
        </PortfolioContext.Provider>
    )
}

