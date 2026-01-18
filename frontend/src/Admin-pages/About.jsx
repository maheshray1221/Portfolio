import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context/portfolio_context.jsx";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [workfor, setWorkfor] = useState("");
  const [knowsAbout, setKnowsAbout] = useState([]);
  const [data, setData] = useState({});
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);

  const { handleCreateAbout, getAbout } = useContext(PortfolioContext);

  const handleAbout = async () => {
    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("jobTitle", jobTitle);
      fd.append("imageUrl", imageUrl);
      fd.append("SocialLinks", socialLinks);
      fd.append("workfor", workfor);
      fd.append("knowsAbout", knowsAbout);

      let res = await handleCreateAbout(fd);
    } catch (err) {
      let message = err.message || "Somthing went wrong";
      setErr(message);
    }
  };
  useEffect(() => {
    const handleGetAbout = async () => {
      let result = await getAbout();
      setData(result.data);

      console.log("result =>", result.data);
    };
    handleGetAbout();
  }, []);

  return (
    <>
      <div className="text-4xl leading-20 border mb-5 bg-gray-400 text-center">
        <p>Name : {data.name}</p>
        <p>JobTitle : {data.jobTitle}</p>
        <p>ImageUrl : {data.imageUrl}</p>
        <p>SocialLinks : {data.SocialLinks?.join(",")}</p>
        <p>Workfor : {data.workfor}</p>
        <p>KnowsAbout : {data.knowsAbout}</p>
      </div>
      <hr />
      <div>
        <Box className="flex justify-center mb-4">
          <Avatar alt="Remy Sharp"></Avatar>
        </Box>
        <Box
          component="form"
          className=" flex flex-col items-center gap-2 w-[70vw] border ml-55"
        >
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
            onChange={(e) => setName(e.target.value)}
          />

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
            onChange={(e) => setJobTitle(e.target.value)}
          ></TextField>

          <input
            className="w-[70%] border h-[3.5vw] border-gray-300"
            required
            type="file"
            margin="normal"
            id="imageUrl"
            name="imageUrl"
            autoComplete="imageUrl"
            onChange={(e) => setImageUrl(e.target.files[0])}
          />

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
            onChange={(e) => setSocialLinks(e.target.value)}
          ></TextField>

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
            onChange={(e) => setWorkfor(e.target.value)}
          ></TextField>

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
            onChange={(e) => setKnowsAbout(e.target.value)}
          ></TextField>
        </Box>
        <p className="flex justify-center text-red-500 ">{err}</p>
        <Box className="flex justify-center mt-5 mb-5">
          <Button onClick={handleAbout} variant="contained" type="button">
            Submit
          </Button>
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          message={msg}
        />
      </div>
      <hr />
      <Box className="flex justify-center mt-5 mb-5">
        <Button
          variant="contained"
          type="button"
          onClick={() => navigate(`/about/${data._id}`)}
        >
          Update About
        </Button>
      </Box>
    </>
  );
}
