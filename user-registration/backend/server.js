import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const server = createServer(app)
server.listen(port, () => console.log(`Server is running at ${port}........`))
app.get("/",(req,res) => res.send("Hurray! server is running..."))


  
})
