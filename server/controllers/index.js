const Todo = require("../models/Todo");

const leerTodo = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

const newTodo = async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;

    try {
        const todo = new Todo({title, description});

        await todo.save();
        res.status(200).json({
            message: "Todo saved successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el todo",
            error
        });
    }
};

const updateTodo = async (req, res) => {
    const {id} = req.params;
    const {title, description, completed} = req.body;

    try {
        await Todo.findByIdAndUpdate(id, {title, description, completed});
        res.status(200).json({
            message: "Todo updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el todo",
            error
        });
    }
}

const deleteTodo = async (req, res) => {
    const {id} = req.params;

    try {
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            message: "Todo deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el todo",
            error
        });
    }
}

module.exports = {
    leerTodo,
    newTodo,
    updateTodo,
    deleteTodo
};
