import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context/portfolio_context";
import { useNavigate } from "react-router-dom";
export default function Skill() {
  const navigete = useNavigate();
  const [skill, setSkill] = useState("");
  const [data, setData] = useState({});
  const [msg, setMsg] = useState();
  const [err, setErr] = useState();
  const [open, setOpen] = useState(false);

  const { createSkill, getSkill } = useContext(PortfolioContext);
  const handleCreateSkill = async () => {
    let res = await createSkill(skill);
    console.log(res);
  };

  useEffect(() => {
    const handleGetSkill = async () => {
      let result = await getSkill();
      setData(result.data);
    };
    handleGetSkill();
  }, []);
  return (
    <>
      <div>
        <p>Skills : {data.skill}</p>
      </div>
      <Box className="flex justify-center mb-4 ">
        <Avatar alt="Remy Sharp"></Avatar>
      </Box>
      <Box
        component="form"
        className=" flex flex-col items-center gap-2 w-[70vw] h-[30vw] border ml-55"
      >
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
          onChange={(e) => setSkill(e.target.value)}
        />
      </Box>
      <p className="flex justify-center text-red-500 ">{err}</p>
      <Box className="flex justify-center mt-5 mb-5">
        <Button onClick={handleCreateSkill} variant="contained" type="button">
          Submit
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={msg}
      />
      <Box className="text-center mb-5">
        <Button
          variant="contained"
          type="button"
          onClick={() => navigete(`/Skill/${data._id}`)}
        >
          Update Skill
        </Button>
      </Box>
    </>
  );
}
