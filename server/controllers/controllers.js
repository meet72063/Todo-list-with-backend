const todo = require('../models/todo')



const getAlltodo = async(req,res)=>{
    try {
       const task = await todo.find({})
       res.status(200).json(task)
    } catch (error) {
        console.log(req)
        console.log(error)
    }
}

const getSingleTodo = async(req,res)=>{
    const id = req.params.id
    try {
        const response = await todo.findOne({_id:id})
   res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
   
}

const editSingleTodo = async(req,res)=>{
    res.send("this is for editing single task")
}

const deleteSingleTodo = async(req,res)=>{
   
    console.log(req.params)
    const response = await todo.findOneAndDelete({_id:req.params.id})
    res.status(200).json(response)
}

const createSingleTodo = async(req,res)=>{
    
    try {
        const task = await todo.create(req.body)
    res.status(200).json(task)
    } catch (error) {
        console.log(error)
    }
    
}


module.exports ={
    getAlltodo,
    getSingleTodo,
    editSingleTodo,
    deleteSingleTodo,
    createSingleTodo
}