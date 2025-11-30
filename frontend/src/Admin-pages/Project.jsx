import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context/portfolio_context";
import { useNavigate } from "react-router-dom";
export default function Project() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoFile, setVideoFile] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [githubLink, setGithubLink] = useState()
  const [projectLink, setProjectLink] = useState("")
  const [data, setData] = useState("")
  const [msg, setMsg] = useState()
  const [err, setErr] = useState()
  const [open, setOpen] = useState(false)

  const { getProject, createProject } = useContext(PortfolioContext)

  useEffect(() => {
    const handleGetProject = async () => {
      const res = await getProject()
      console.log(res)
      setData(res.data)
    }
    handleGetProject()
  }, [])

  const handleCreateProject = async () => {
    try {
      const fb = new FormData()
      fb.append("title", title)
      fb.append("description", description)
      fb.append("videoUrl", videoFile)
      fb.append("technologies", technologies)
      fb.append("githubLink", githubLink)
      fb.append("ProjectLink", projectLink)

      const res = await createProject(fb)
      console.log(res)
    } catch (err) {
      let message = err.message || "Somthing went wrong"
      setErr(message)
    }
  }
  return (
    <>
      <div className="text-4xl leading-20 border mb-5 bg-gray-400 text-center">
        <p>Title : {data.title}</p>
        <p>Description : {data.description}</p>
        <p>VideoUrl : {data.videoUrl}</p>
        <p>Technologies : {data.technologies}</p>
        <p>Github Link : {data.githubLink}</p>
        <p>Project Link : {data.ProjectLink}</p>
      </div>
      <hr />
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
          onClick={handleCreateProject}
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
          onClick={() => navigate(`/project/${data._id}`)}
        >Update About</Button>
      </Box>
    </>
  )
}
