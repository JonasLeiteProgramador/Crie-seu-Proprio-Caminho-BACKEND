import express from "express";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.js";


const app = express()
const port = 7777

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json())


app.use(routes);
app.use(express.static('public'));



app.listen(port, () =>  console.log(`Server is running on the port  ${port} `),testConnection())