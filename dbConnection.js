const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://sasitharan:sasi@learn.vfrd0.mongodb.net/learn?retryWrites=true&w=majority'
let client=new MongoClient(url)

let myDb="learn"

let dbConnection=async ()=>{
  await client.connect();
  let db=client.db(myDb)
  return db;

}
module.exports={dbConnection}

