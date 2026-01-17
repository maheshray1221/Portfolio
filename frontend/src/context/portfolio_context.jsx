import { createContext } from "react";
import { client } from "../utils/Client.js";

export const PortfolioContext = createContext({});

export const PortfolioProvider = ({ children }) => {
  // About
  const handleCreateAbout = async (FormData) => {
    try {
      const res = await client.post("/createAbout", FormData, {
        withCredentials: true,
      });

      if (res.status === 200) {
        console.log(res.message);
      }
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const getAbout = async () => {
    try {
      let res = await client.get("/getAbout", { withCredentials: true });
      if (res.status === 200) {
        console.log(res.data);
      }
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  const updateAbout = async (id, FormData) => {
    try {
      let res = await client.put(`/updateAbout/${id}`, FormData, {
        withCredentials: true,
      });

      if (res.status === 200) {
        console.log(res.data);
      }
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Skill
  const createSkill = async (skill) => {
    try {
      const res = await client.post(
        "/createSkill",
        {
          skill,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        console.log(res.data);
      }
    } catch (error) {
      throw error;
    }
  };

  const getSkill = async () => {
    try {
      const res = await client.get("/getSkill", { withCredentials: true });
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const updateSkill = async (id, skill) => {
    try {
      const res = await client.put(`/updateSkill/${id}`, skill, {
        withCredentials: true,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  // Project
  const createProject = async (FormData) => {
    try {
      const res = await client.post("/createProject", FormData, {
        withCredentials: true,
      });

      if (res.status === 200) {
        console.log(res.data);
      }
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const getProject = async () => {
    try {
      const res = await client.get("/getProject", { withCredentials: true });
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const updateProject = async (id, FormData) => {
    try {
      const res = await client.put(`/updateProject/${id}`, FormData, {
        withCredentials: true,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  // Experience
  const createExperience = async (FormData) => {
    try {
      const res = await client.post("/createExperience", FormData, {
        withCredentials: true,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const getExperience = async () => {
    try {
      const res = await client.get("/getExperience", { withCredentials: true });
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const updateExperience = async (id, FormData) => {
    try {
      const res = await client.put(`/updateExperience/${id}`, FormData, {
        withCredentials: true,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const data = {
    handleCreateAbout,
    getAbout,
    updateAbout,
    createSkill,
    getSkill,
    updateSkill,
    createProject,
    getProject,
    updateProject,
    createExperience,
    getExperience,
    updateExperience,
  };
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
};
