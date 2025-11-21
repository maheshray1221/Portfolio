import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";


export const AdminContext = createContext({})

const client = axios.create({
    baseURL: "http://localhost:8080/api/v1/admin"
})

export const AdminProvider = ({ children }) => {
    // const adminContext = useContext(AdminContext)

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
        loginAdmin
    }

    return (
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )

}