const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Task = mongoose.model("Task", {
    title: String,
    description: String,
    status: Boolean,
    author: String,
    deleteAt: Date,
    updateAt: Date,
    createdAt: Date
});

mongoose.connect("mongodb://127.0.0.1:27017/archi")

let test = new Task({title: "Hello World"});
test.save().then(()=>{
    console.log("ok");
}).catch(()=>{
    console.log("ko");
})

app.use(express.static("public"));

app.get("/api/task",(req,res) => {
    res.end();
});
app.get("/api/task/:id",(req,res) => {
    res.end();
});
app.post("/api/task",(req,res) => {
    res.end();
});
app.put("/api/task",(req,res) => {
    res.end();
});
app.patch("/api/task",(req,res) => {
    res.end();
});
app.delete("/api/task/:id",(req,res) => {
    res.end();
});

app.listen(3000, () => console.log("Server Up and running"));