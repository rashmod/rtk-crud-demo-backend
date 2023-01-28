const TodosModel = require('../models/TodosModel');

module.exports.getAllTodos = async (req, res) => {
	try {
		const todos = await TodosModel.find();

		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.addTodo = async (req, res) => {
	try {
		const { task, status } = req.body;

		const todo = new TodosModel({
			task,
			status,
		});

		await todo.save();

		res.status(200).json(todo);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await TodosModel.findByIdAndDelete(id);
		if (todo) {
			res.status(200).json(todo);
		} else {
			res.status(404).json({ success: false });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
