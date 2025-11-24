import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext.jsx"
export default function About() {
  const [name, setName] = useState()
  const [jobTitle, setJobTitle] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [socialLinks, setSocialLinks] = useState([])
  const [workfor, setWorkfor] = useState()
  const [knowsAbout, setKnowsAbout] = useState([])
  const [msg, setMsg] = useState()
  const [err, setErr] = useState()
  const [open, setOpen] = useState(false)

  const { handleCreateAbout } = useContext(PortfolioContext)

  const handleAbout = async () => {
    try {
      let result = await handleCreateAbout(name, jobTitle, imageUrl, socialLinks, workfor, knowsAbout)
      setMsg(result)
      console.log(result);
    } catch (err) {
      let message = err.message || "Somthing went wrong"
      setErr(message)
    }

  }

  return (
    <div>
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
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          autoComplete="name"
          autoFocus
          onChange={(e) => setName(e.target.value)} />

        <TextField
          className="w-[70%]"
          variant="outlined"
          label="Job Title"
          required
          margin="normal"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
          autoComplete="jobTitle"
          onChange={(e) => setJobTitle(e.target.value)}>
        </TextField>

        <TextField
          className="w-[70%]"
          variant="outlined"
          label=""
          required
          type="file"
          margin="normal"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          autoComplete="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}>
        </TextField>

        <TextField
          className="w-[70%]"
          variant="outlined"
          label="Social Links"
          required
          margin="normal"
          id="socialLinks"
          name="socialLinks"
          value={socialLinks}
          autoComplete="socialLinks"
          onChange={(e) => setSocialLinks(e.target.value)}>
        </TextField>

        <TextField
          className="w-[70%]"
          variant="outlined"
          label="Work For"
          required
          margin="normal"
          id="workfor"
          name="workfor"
          value={workfor}
          autoComplete="workfor"
          onChange={(e) => setWorkfor(e.target.value)}>
        </TextField>

        <TextField
          className="w-[70%]"
          variant="outlined"
          label="Knows About"
          required
          margin="normal"
          id="knowsAbout"
          name="knowsAbout"
          value={knowsAbout}
          autoComplete="knowsAbout"
          onChange={(e) => setKnowsAbout(e.target.value)}>
        </TextField>
      </Box>
      <p className="flex justify-center text-red-500 ">{err}</p>
      <Box className="flex justify-center mt-5 mb-5">
        <Button
          onClick={handleAbout}
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
