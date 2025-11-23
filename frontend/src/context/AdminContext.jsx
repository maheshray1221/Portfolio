import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { client } from "../utils/Client.js";

export const AdminContext = createContext({})

export const AdminProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [admin, setAdmin] = useState(null)

    useEffect(() => {
        async () => {
            try {
                const res = await client.get("/check-auth", {
                    withCredentials: true
                })

                setIsAuthenticated(true)
                setAdmin(res.data.data.admin)
            } catch (error) {
                setIsAuthenticated(false)
                setAdmin(null)
            }

        }
    }, [])

    // admin register
    const registerAdmin = async (email, password, username) => {
        try {
            const request = await client.post("/register-admin", {
                email,
                username,
                password
            })
            if (request.status === 200) {
                return request.data.message
            }
        } catch (err) {
            throw err
        }

    }

    const loginAdmin = async (username, password) => {
        try {
            const request = await client.post("/login-admin", {
                username,
                password
            }, { withCredentials: true })

            if (request.status === 200) {
                console.log(request.data)
            }
        } catch (err) {
            throw err
        }
    }


    const data = {
        registerAdmin,
        loginAdmin,
        isAuthenticated,
        setIsAuthenticated,
        admin,
        setAdmin

    }

    return (
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )

}