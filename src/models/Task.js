const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    Task:{
        type: String,
    },
})

const Task = mongoose.model("Task", taskSchema);

module.exports = {
    Task,
}