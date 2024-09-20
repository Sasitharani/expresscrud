const { ObjectId } = require("mongodb")
const { dbConnection } = require("../../../dbConnection")

let studentInsert=async (req,res)=>{
    // {
    //     studentName: 'Sunny',
    //     studentEmail: 'sunny@gmail.com',
    //     studentPhone: 77777777
    //   }
    let {studentName,studentEmail,studentPhone}=req.body
    let obj={
        studentName,
        studentEmail,
        studentPhone
    }
    let db=await dbConnection()
    let studentTable= await  db.collection("student")
    let finalRes=await studentTable.insertOne(obj)
    let apiobj={
        status:1,
        message:finalRes
    }
    res.send(apiobj)
}

let studentView= async (req,res)=>{
    let db=await dbConnection()
    let studentTable= await  db.collection("student")
    let studentData=await studentTable.find().toArray();
    let obj={
        status:1,
        studentList:studentData
    }
    res.send(obj)
}

let studentDelete=async (req,res)=>{
    let db=await dbConnection()
    let studentTable= await  db.collection("student")
    let id=req.params.id;
    let delres= await studentTable.deleteOne({_id:new ObjectId(id)})
    let obj={
        status:1,
        message:delres
    }

    res.send(obj)
}
module.exports={studentInsert,studentView,studentDelete}