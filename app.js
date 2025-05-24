require("dotenv").config();
var express =  require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())


const mongoose = require("mongoose")


const UserRoutes = require ("./src/Controller/Routes/UserRoutes") 
app.use(UserRoutes)
const WorkRoutes = require("./src/Controller/Routes/WorkRoutes")
app.use(WorkRoutes)
const Queryroutes = require("./src/Controller/Routes/QueryRoutes")
app.use(Queryroutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB is connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));





var PORT = 6009    // to create port number and server
app.listen(PORT,()=>{    // to start the server
    console.log("port number is",PORT)
})
