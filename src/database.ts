import mongoose from "mongoose"

const database = () => {
	mongoose.connect("mongodb://localhost:27017/test", (err: any) => {
		if (err) {
			console.log("err.message: ", err.message)
		} else {
			console.log("Connected to database")
		}
	})
}

export default database
