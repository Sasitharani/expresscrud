let express=require("express");
const { mainRoute } = require("./App/mainRoute");
let app=express();

app.use(express.json())
app.use(mainRoute)


app.listen("8100")