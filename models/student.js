const mongoose = require('mongoose')


const student_shema = new mongoose.Schema({
    name : String,
    inscriptionDate : {
        type : Date,
        default : Date.now()
    },
    age : Number,
    active : Boolean,
    paymentAmount : Number

});

const Student = mongoose.model('student',student_shema);

module.exports.Student=Student;

