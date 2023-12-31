import express from "express"

import diaryRouter from "./routes/diaries"

const app = express()
app.use(express.json()) // middleware que tranfsorma la req.body a un json

const PORT = 3000

app.get("/ping" ,(_req, res) =>{
    console.log ("someone pinged her")
    res.send("pong" +" " + new Date().toLocaleDateString())
} )

app.use("/api/diaries", diaryRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})