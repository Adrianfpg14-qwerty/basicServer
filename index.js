import { config } from "dotenv"
config();

import http from "http"
import express from "express"
import cors from "cors"
import morgan from "morgan";

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan(':method :url'));

const server = http.createServer(app);



import InfoUserService from "./services/InfoUserService.js";
// --------------- ENDPOINTS ---------------
app.get('/get-all-data', (req, res) => {

  console.log(InfoUserService.getAllUsers())
  return res.status(200).send(InfoUserService.getAllUsers())
});


app.get("/get-data/:id", (req, res) => {

  try {
    const id = req.params.id;
    console.log(id)
  
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(404).send("Error")
  }
});




app.post('/send-data', (req, res) => {
  const { id, name, surname, place } = req.body;

  console.log(req.body)

  return res.status(200).send(messageToUser)
});










const bootstrap = async () => {
  server.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

}

bootstrap();


