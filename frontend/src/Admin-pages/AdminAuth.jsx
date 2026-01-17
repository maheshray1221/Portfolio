import { TextField, Button, Avatar, Snackbar, Box } from "@mui/material";
import { useContext } from 'react'
import { useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { useNavigate } from "react-router-dom";

export default function AdminAuth() {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    const [formState, setFormState] = useState(0)
    const [open, setOpen] = useState(false)

    const { registerAdmin, loginAdmin } = useContext(AdminContext)
    let navigate = useNavigate()
    const handleAuth = async () => {
        try {
            if (formState === 0) {
                const result = await loginAdmin(username, password)
                console.log("result", result)
                setMessage(result)
                setOpen(true)
                navigate("/admin/about")
            }
            if (formState === 1) {
                const result = await registerAdmin(email, username, password)
                console.log("result", result)
                setMessage(result)
                setOpen(true)
            }
        } catch (err) {
            let msg = err || "somthing went wrong"
            setError(msg)
        }
    }
    return (
        <div>
            <Box className="flex justify-center mb-4" >
                <Avatar alt="Remy Sharp"  >
                    <LockOutlineIcon />
                </Avatar>
            </Box>
            <Box className="flex justify-center ">
                <Button variant={formState === 0 ? "contained" : "outlined"} onClick={() => setFormState(0)}>SIGN IN</Button>
                <Button variant={formState === 1 ? "contained" : "outlined"} onClick={() => setFormState(1)}>SIGN UP</Button>
            </Box>
            <Box component="form"
                className="flex flex-col items-center gap-8">
                {
                    formState === 1 ?
                        <TextField
                            required
                            margin="normal"
                            id="email"
                            label="Email"
                            variant="standard"
                            name="email"
                            value={email}
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)} /> : <></>
                }

                <TextField required
                    margin="normal"
                    id="Username"
                    label="Username"
                    variant="standard"
                    name="username"
                    value={username}
                    autoComplete="username"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)} />

                <TextField required
                    margin="normal"
                    id="Password"
                    label="Password"
                    variant="standard"
                    name="password"
                    value={password}
                    type="password"
                    autoComplete="password"
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)} />
            </Box>
            <p className="flex justify-center text-red-500 ">{error}</p>
            <Box className="flex justify-center ">

                <Button variant="contained"
                    type="button"
                    onClick={handleAuth}>
                    {formState === 0 ? "Log In" : "Register"}</Button>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
            />
        </div>
    )
}
