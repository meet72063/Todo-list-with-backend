const express = require('express')
const router = express.Router()
const {
    getAlltodo,
    getSingleTodo,
    editSingleTodo,
    deleteSingleTodo,
    createSingleTodo

} = require('../controllers/controllers')

router.route('/').get(getAlltodo).post(createSingleTodo)
router.route('/:id').get(getSingleTodo).patch(editSingleTodo).delete(deleteSingleTodo)

module.exports = router