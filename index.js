const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const todosRoutes = require('./routes/todosRoutes');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const connectDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB connected to Host: ${con.connection.host}`);
	} catch (error) {
		console.log(`MongoDB connection failed: ${error}`);
	}
};

app.use('/api/todos', todosRoutes);

connectDB();

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
