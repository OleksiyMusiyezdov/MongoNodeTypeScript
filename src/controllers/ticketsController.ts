import { Request, Response } from "express"
import Ticket from "../../models/ticket-schema"

export let allTickets = async (req: Request, res: Response) => {
	const sort = (req.query.sort = "desc") ? -1 : 1
	const outputFormat = req.query.outputFormat

	try {
		const tickets = await Ticket.find(
			{
				$and: [
					{ userId: { $eq: req.query.userId } },
					{ priority: { $eq: req.query.priority } },
				],
			},
			null,
			{ sort: { userId: sort } },

			(err: any, tickets: any) => {
				if (err) {
					res.send(err)
				} else {
					if (!outputFormat || outputFormat === "json") {
						res.status(200).send(tickets)
					} else if (outputFormat === "html") {
						const table = Array.from(tickets).map((ticket) => {
							return `<tr> ${ticket} </tr>`
						})
						const htmlOutput = `<table> ${table} </table>`
						res.status(200).send(htmlOutput)
					} else {
						res.status(400).send("Incorrect output format")
					}
				}
			}
		)
	} catch (error) {
		console.log("Error: ", error)
	}
}
