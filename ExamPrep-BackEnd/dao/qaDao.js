// const db = require('../database')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/examprep')


const questionSchema = new mongoose.Schema(
    {_id:Number,question:String,choices:{ca:String,cb:String,cc:String,cd:String},
    answer:String})

const questionModel = new mongoose.model("Question", questionSchema)


// retrieve all qas
exports.getAll = async function(){
    const all = await questionModel.find({}).exec();
    console.log(all)
    return all
}

// retrieve a qa by id
exports.getById = async function(id){
    const filter = {_id: id};
    const question = await questionModel.find(filter);
    return question   
}

// add a qa
exports.addOne = async function(qa){
    const q1 = new questionModel(qa)
    const val = await q1.save()
    console.log("saved")
    console.log(val)
}

// delete a qa by id
exports.removeOne = async function(id){
    questionModel.findByIdAndRemove(id)
}


