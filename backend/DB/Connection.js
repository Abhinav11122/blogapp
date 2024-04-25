const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://abhinav_11:abhinav@cluster0.ye0pzbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("Db connected")
})
.catch((error)=>{
    console.log(error)
})

