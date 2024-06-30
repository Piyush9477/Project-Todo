const express = require("express");

const PORT = 8000;

//init app
const app = express();

//listen 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});