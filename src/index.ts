import express from "express"
import { json } from "body-parser"
import * as ticketsController from "./controllers/ticketsController"

const app = express()
app.use(json())

app.get("/tickets", ticketsController.allTickets)

app.listen(3000, () => {
	console.log("Listening port 3000")
})
