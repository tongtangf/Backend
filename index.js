var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050

const {db} = require("adminfirebase")
app.get("/",(req,res)=>{
    const TodoREF = db.collection("Todolist")
    TodoREF.get().then((snapshot)=>{
        const data = snapshot.docs
    
        console.log(data)
    }
        
    ) 

})

app.listen(PORT, function(){console.log("Sever runing on port 505")})