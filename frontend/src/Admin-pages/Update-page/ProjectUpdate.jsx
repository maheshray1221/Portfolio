import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortfolioContext } from "../../context/portfolio_context";

// update About
export const ProjectUpdate = function () {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [videoFile, setVideoFile] = useState("")
    const [technologies, setTechnologies] = useState("")
    const [githubLink, setGithubLink] = useState("")
    const [projectLink, setProjectLink] = useState("")
    const [msg, setMsg] = useState()
    const [err, setErr] = useState()
    const [open, setOpen] = useState(false)

    const { updateProject, getProject } = useContext(PortfolioContext)

    const HandleUpdateProject = async () => {
        let fb = new FormData()
        fb.append("title", title)
        fb.append("description", description)
        fb.append("videoUrl", videoFile)
        fb.append("technologies", technologies)
        fb.append("githubLink", githubLink)
        fb.append("ProjectLink", projectLink)

        let result = await updateProject(id, fb)
        console.log(id)
    }
    useEffect(() => {
        const handleGetProject = async () => {
            const res = await getProject()
            setTitle(res.data.title)
            setDescription(res.data.description)
            setVideoFile(res.data.videoFile)
            setTechnologies(res.data.technologies)
            setGithubLink(res.data.githubLink)
            setProjectLink(res.data.ProjectLink)

        }
        handleGetProject()
    }, [])
    return (
        <>
            <Box className="flex justify-center mb-4" >
                <Avatar alt="Remy Sharp"  >

                </Avatar>
            </Box>
            <Box component="form"
                className=" flex flex-col items-center gap-2 w-[70vw] border ml-55">

                <TextField
                    className="w-[70%] "
                    required
                    margin="normal"
                    id="title"
                    label="Title"
                    variant="outlined"
                    name="title"
                    value={title}
                    autoComplete="title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)} />

                <TextField
                    className="w-[70%]"
                    variant="outlined"
                    label="Description"
                    required
                    margin="normal"
                    id="description"
                    name="description"
                    value={description}
                    autoComplete="description"
                    onChange={(e) => setDescription(e.target.value)}>
                </TextField>

                <input
                    className="w-[70%] border h-[3.5vw] border-gray-300"
                    required
                    type="file"
                    margin="normal"
                    id="videoUrl"
                    name="videoUrl"
                    autoComplete="videoUrl"
                    onChange={(e) => setVideoFile(e.target.files[0])} />


                <TextField
                    className="w-[70%]"
                    variant="outlined"
                    label="Technologies"
                    required
                    margin="normal"
                    id="technologies"
                    name="technologies"
                    value={technologies}
                    autoComplete="technologies"
                    onChange={(e) => setTechnologies(e.target.value)}>
                </TextField>

                <TextField
                    className="w-[70%]"
                    variant="outlined"
                    label="Github Link"
                    required
                    margin="normal"
                    id="githubLink"
                    name="githubLink"
                    value={githubLink}
                    autoComplete="githubLink"
                    onChange={(e) => setGithubLink(e.target.value)}>
                </TextField>

                <TextField
                    className="w-[70%]"
                    variant="outlined"
                    label="Project Link"
                    required
                    margin="normal"
                    id="projectLink"
                    name="projectLink"
                    value={projectLink}
                    autoComplete="projectLink"
                    onChange={(e) => setProjectLink(e.target.value)}>
                </TextField>

            </Box>
            <p className="flex justify-center text-red-500 ">{err}</p>
            <Box className="flex justify-center mt-5 mb-5">
                <Button
                    onClick={HandleUpdateProject}
                    variant="contained"
                    type="button">
                    Update
                </Button>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={msg}
            />
            
        </>
    )
}