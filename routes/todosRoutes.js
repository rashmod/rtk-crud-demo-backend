const express = require('express');
const {
	getAllTodos,
	addTodo,
	deleteTodo,
} = require('../controllers/todosControllers');

const router = express.Router();

router.get('/', getAllTodos);

router.post('/', addTodo);

router.delete('/:id', deleteTodo);

module.exports = router;
