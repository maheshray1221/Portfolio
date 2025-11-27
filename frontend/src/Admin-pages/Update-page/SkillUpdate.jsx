import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../context/portfolio_context.jsx";
import { useParams } from "react-router-dom";

// update About
export const SkillUpdate = function () {
    const [skill, setSkill] = useState("")
    const [data, setData] = useState({})
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")
    const [open, setOpen] = useState(false)

    const { UpdateAbout, getAbout } = useContext(PortfolioContext)
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

        let result = await UpdateAbout(id, fb)
        setData(result)

    }
    useEffect(() => {
        const handleGetAbout = async () => {
            let res = await getAbout()
            setSkill(res.data.skill)
            
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
            </Box>
            <p className="flex justify-center text-red-500 ">{err}</p>
            <Box className="flex justify-center mt-5 mb-5">
                <Button
                    onClick={HandleUpdateAbout}
                    variant="contained"
                    type="button">
                    hello
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