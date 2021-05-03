const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes)


const url = "mongodb+srv://ggibamede:ggibamede123@cluster0.t9w8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

mongoose.connect(url , connectionParams).then(()=>{
    console.log("Conectado ao banco de dados")
}).catch(()=>{
    console.error("Ocorreu um erro na conexão")
})


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("Servidor Rodando")
})