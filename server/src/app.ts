import express from "express"
import cors from "cors"

const app = express()

const PORT = 3000

app.use(cors())
app.use(express.json());

app.listen(PORT , () => {
 console.log(`listening port ${PORT}`)
})

app.post("/streamers", async(req, res) => {
    // const {name, platform, description} = req.body


})
app.get("/streamers", (req, res) => {
  
})
app.get("/streamers.:id", (req, res) => {
  
})
app.put("/streamers.:id/vote", (req, res) => {
  
})