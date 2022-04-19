const express = require('express');
const router = express.Router();
const {leerTodo, newTodo, updateTodo, deleteTodo} = require('../controllers/index');

router.get('/', leerTodo);
router.post('/', newTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;