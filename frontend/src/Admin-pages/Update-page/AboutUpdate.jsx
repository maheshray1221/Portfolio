import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../context/portfolio_context.jsx";
import { useParams } from "react-router-dom";

// update About
export const AboutUpdate = function () {
    const [name, setName] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [imageUrl, setImageUrl] = useState()
    const [socialLinks, setSocialLinks] = useState([])
    const [workfor, setWorkfor] = useState("")
    const [knowsAbout, setKnowsAbout] = useState([])
   
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")
    const [open, setOpen] = useState(false)

    const { updateAbout, getAbout } = useContext(PortfolioContext)
    const { id } = useParams()
    // name, jobTitle, imageUrl, SocialLinks, workfor, knowsAbout
    const HandleUpdateAbout = async () => {
        let fb = new FormData()
        fb.append("name", name)
        fb.append("jobTitle", jobTitle)
        fb.append("imageUrl", imageUrl)
        fb.append("SocialLinks", socialLinks)
        fb.append("workfor", workfor)
        fb.append("knowsAbout", knowsAbout)

        let result = await updateAbout(id, fb)

    }
    useEffect(() => {
        const handleGetAbout = async () => {
            let res = await getAbout()
            setName(res.data.name)
            setJobTitle(res.data.jobTitle)
            setImageUrl(res.data.imageUrl)
            setSocialLinks(res.data.SocialLinks)
            setWorkfor(res.data.workfor)
            setKnowsAbout(res.data.knowsAbout)
        }
        handleGetAbout()
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
                    id="name"
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={name}
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{ shrink: true }} />

                <TextField
                    fullWidth
                    className="w-[70%]"
                    variant="outlined"
                    label="Job Title"
                    required
                    margin="normal"
                    id="jobTitle"
                    name="jobTitle"
                    value={jobTitle}
                    autoComplete="jobTitle"
                    onChange={(e) => setJobTitle(e.target.value)}
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

                <TextField
                    fullWidth
                    className="w-[70%]"
                    variant="outlined"
                    label="Social Links"
                    required
                    margin="normal"
                    id="socialLinks"
                    name="socialLinks"
                    value={socialLinks}
                    autoComplete="socialLinks"
                    onChange={(e) => setSocialLinks(e.target.value)}
                    InputLabelProps={{ shrink: true }} />


                <TextField
                    fullWidth
                    className="w-[70%]"
                    variant="outlined"
                    label="Work For"
                    required
                    margin="normal"
                    id="workfor"
                    name="workfor"
                    value={workfor}
                    autoComplete="workfor"
                    onChange={(e) => setWorkfor(e.target.value)}
                    InputLabelProps={{ shrink: true }} />


                <TextField
                    fullWidth
                    className="w-[70%]"
                    variant="outlined"
                    label="Knows About"
                    required
                    margin="normal"
                    id="knowsAbout"
                    name="knowsAbout"
                    value={knowsAbout}
                    autoComplete="knowsAbout"
                    onChange={(e) => setKnowsAbout(e.target.value)}
                    InputLabelProps={{ shrink: true }} />


            </Box>
            <p className="flex justify-center text-red-500 ">{err}</p>
            <Box className="flex justify-center mt-5 mb-5">
                <Button
                    onClick={HandleUpdateAbout}
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