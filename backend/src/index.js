import dotenv from 'dotenv'
dotenv.config({ path: "./.env" })

import connectDB from "./db/index.js"
import { app } from "./app.js"

connectDB()
    .then(() => {
        const port = process.env.PORT || 8000
        app.listen(port, () => {
            console.log(`continue working on port ${port}`)
        })
    })
    .catch((err) => {
        console.log("Error while listen time", err)
    })