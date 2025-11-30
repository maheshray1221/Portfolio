import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortfolioContext } from "../../context/portfolio_context";

// update About
export const ExperienceUpdate = function () {
    const { id } = useParams()
    const [jobTitle, setJobTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")
    const [open, setOpen] = useState(false)

    const { updateExperience, getExperience } = useContext(PortfolioContext)

    const HandleUpdateExperience = async () => {
        let fb = new FormData()
        fb.append("jobTitle", jobTitle)
        fb.append("description", description)
        fb.append("imageUrl", imageUrl)

        let result = await updateExperience(id, fb)
        console.log(result)

    }
    useEffect(() => {
        const handleGetExperience = async () => {
            const res = await getExperience()
            setJobTitle(res.data.jobTitle)
            setDescription(res.data.description)
            setImageUrl(res.data.imageUrl)
        }
        handleGetExperience()
    }, [])
    return (
        <div>
            <Box className="flex justify-center mb-4" >
                <Avatar alt="Remy Sharp"  >

                </Avatar>
            </Box>
            <Box component="form"
                className=" flex flex-col items-center gap-2 w-[70vw] border ml-55">

                <TextField
                    fullWidth
                    className="w-[70%] "
                    required
                    margin="normal"
                    id="jobTitle"
                    label="Job Title"
                    variant="outlined"
                    name="jobTitle"
                    value={jobTitle}
                    autoComplete="jobTitle"
                    autoFocus
                    onChange={(e) => setJobTitle(e.target.value)}
                    InputLabelProps={{ shrink: true }} />

                <TextField
                    fullWidth
                    className="w-[70%]"
                    variant="outlined"
                    label="Description"
                    required
                    margin="normal"
                    id="description"
                    name="description"
                    value={description}
                    autoComplete="description"
                    onChange={(e) => setDescription(e.target.value)}
                    InputLabelProps={{ shrink: true }} />


                <input
                    className="w-full border h-[3.5vw] border-gray-300 rounded-sm"
                    required
                    type="file"
                    margin="normal"
                    id="imageUrl"
                    name="imageUrl"
                    autoComplete="imageUrl"

                    onChange={(e) => setImageUrl(e.target.files[0])}
                />

            </Box>
            <p className="flex justify-center text-red-500 ">{err}</p>
            <Box className="flex justify-center mt-5 mb-5">
                <Button
                    onClick={HandleUpdateExperience}
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
        </div>
    )
}