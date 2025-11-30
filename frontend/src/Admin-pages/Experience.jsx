import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context/portfolio_context";
import { useNavigate } from "react-router-dom";
export default function Experience() {
  const navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [data, setData] = useState("")
  const [msg, setMsg] = useState("")
  const [err, setErr] = useState("")
  const [open, setOpen] = useState(false)

  const { getExperience, createExperience } = useContext(PortfolioContext)

  useEffect(() => {
    const handleGetExperience = async () => {
      const res = await getExperience()
      console.log(res)
      setData(res.data)
    }
    handleGetExperience()
  }, [])

  const handleCreateExperience = async () => {
    try {
      const fd = new FormData()
      fd.append("jobTitle", jobTitle)
      fd.append("description", description)
      fd.append("imageUrl", imageUrl)

      const res = await createExperience(fd)
      console.log(res)
    } catch (error) {
      let message = err.message || "Somthing went wrong"
      setErr(message)
    }
  }

  return (
    <>
      <div className="text-4xl leading-20 border mb-5 bg-gray-400 text-center">
        <p>Job TiTle : {data.jobTitle}</p>
        <p>Description : {data.description}</p>
        <p>ImageUrl : {data.imageUrl}</p>
      </div>
      <hr />
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

        <input
          className="w-[70%] border h-[3.5vw] border-gray-300"
          required
          type="file"
          margin="normal"
          id="imageUrl"
          name="imageUrl"
          autoComplete="imageUrl"
          onChange={(e) => setImageUrl(e.target.files[0])} />

      </Box>
      <p className="flex justify-center text-red-500 ">{err}</p>
      <Box className="flex justify-center mt-5 mb-5">
        <Button
          onClick={handleCreateExperience}
          variant="contained"
          type="button">
          Submit
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={msg}
      />
      <hr />
      <Box className="flex justify-center mt-5 mb-5">
        <Button
          variant="contained"
          type="button"
          onClick={() => navigate(`/experience/${data._id}`)}
        >Update About</Button>
      </Box>
    </>
  )
}
