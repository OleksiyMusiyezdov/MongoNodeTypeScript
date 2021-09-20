import mongoose from "mongoose"
import database from "../src/database"

database()

export const ticketSchema = new mongoose.Schema({
	id: { type: String },
	userName: { type: String },
	ticketName: { type: String },
	priority: { type: Number },
})

const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket
