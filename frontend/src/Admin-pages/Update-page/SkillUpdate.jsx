import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../context/portfolio_context.jsx";
import { useParams } from "react-router-dom";

// update About
export const SkillUpdate = function () {
  const [skill, setSkill] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);

  const { updateSkill, getSkill } = useContext(PortfolioContext);
  const { id } = useParams();

  const HandleUpdateAbout = async () => {
    let result = await updateSkill(id, skill);
    console.log(result);
  };
  useEffect(() => {
    const handleGetSkill = async () => {
      let result = await getSkill();
      console.log("->", result);
      setSkill(result.data.skill);
    };
    handleGetSkill();
  }, []);
  return (
    <div className="mb-[16.2vw]">
      <Box className="flex justify-center mb-4">
        <Avatar alt="Remy Sharp"></Avatar>
      </Box>
      <Box
        component="form"
        className=" flex flex-col items-center gap-2 w-[70vw] border ml-55"
      >
        <TextField
          fullWidth
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
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <p className="flex justify-center text-red-500 ">{err}</p>
      <Box className="flex justify-center mt-5 mb-5">
        <Button onClick={HandleUpdateAbout} variant="contained" type="button">
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
  );
};
