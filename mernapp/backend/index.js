const express = require('express')
const app = express()
const mongoose=require('mongoose')
const DB='mongodb+srv://GoFood:Potato123@cluster0.ahxogmx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('connection successfull');
    const fetched_data=mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data){
      const foodCategory=mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function (err,catData){
        if(err){
               console.log(err);
           }
           else {
            global.food_items=data;
            global.foodCategory=catData;
             
           }
      })
        // if(err){
        //     console.log(err);
        // }
        // else {
        //    global.food_items=data;
           
        // }
    })
}).catch((err)=>console.log('no connection'));

const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept"


  );
  next();
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"))
app.use('/api',require("./Routes/DisplayData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

