import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { streamerRouter } from "./routes/streamer-routes"

const app = express()
const db = "mongodb+srv://Dzianis:.V24MJrn8pKrN9H@streamers.6dtpau7.mongodb.net/?retryWrites=true&w=majority"
const PORT = 3000

mongoose.connect(db).then(res => console.log("success")).catch(err => console.log(err))

app.use(cors())
app.use(express.json());
app.listen(PORT , () => {
 console.log(`listening port ${PORT}`)
})
app.use(streamerRouter)





