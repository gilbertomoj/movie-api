const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./config/db");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes)



const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

mongoose.connect(db.mongoURI , connectionParams).then(()=>{
    console.log("Conectado ao banco de dados")
}).catch(()=>{
    console.error("Ocorreu um erro na conexão")
})


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("Servidor Rodando")
})