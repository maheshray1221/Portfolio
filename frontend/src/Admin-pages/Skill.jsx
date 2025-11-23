import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useState } from "react";
export default function Skill() {
  const [name, setName] = useState()
  const [jobTitle, setJobTitle] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [socialLinks, setSocialLinks] = useState([])
  const [workfor, setWorkfor] = useState()
  const [knowsAbout, setKnowsAbout] = useState([])
  const [msg, setMsg] = useState()
  const [err, setErr] = useState()
  const [open, setOpen] = useState(false)

  return (
    <div>
        <p>this is Skill section</p>
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
          label="Image Url"
          required
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
          onChange={(e) => setWorkfor(e.target.value)}>
        </TextField>
      </Box>
      <p className="flex justify-center text-red-500 ">{err}</p>
      <Box className="flex justify-center mt-5 mb-5">
        <Button variant="contained"
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
