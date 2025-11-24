import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useState } from "react";
export default function Experience() {
  const [jobTitle, setJobTitle] = useState()
  const [description, setDescription] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [msg, setMsg] = useState()
  const [err, setErr] = useState()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Box className="flex justify-center mb-4" >
        <Avatar alt="Remy Sharp"  >

        </Avatar>
      </Box>
      <Box component="form"
        className=" flex flex-col items-center gap-2 w-[70vw] h-[30vw] border ml-55">

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
          autoFocus
          onChange={(e) => setJobTitle(e.target.value)}>
        </TextField>

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
