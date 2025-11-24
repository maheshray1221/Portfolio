import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useState } from "react";
export default function Skill() {
  const [skill, setSkill] = useState([])
  const [msg, setMsg] = useState()
  const [err, setErr] = useState()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Box className="flex justify-center mb-4 " >
        <Avatar alt="Remy Sharp"  >

        </Avatar>
      </Box>
      <Box component="form"
        className=" flex flex-col items-center gap-2 w-[70vw] h-[30vw] border ml-55">

        <TextField
          className="w-[70%] "
          required
          margin="normal"
          id="skill"
          label="Skill"
          variant="outlined"
          name="skill"
          value={skill}
          autoComplete="skill"
          autoFocus
          onChange={(e) => setSkill(e.target.value)} />
      </Box>
      <p className="flex justify-center text-red-500 ">{err}</p>
      <Box className="flex justify-center mt-5 mb-5">
        <Button variant="contained"
          type="button">
          Add
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
