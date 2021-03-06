import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './Routers/userRouter.js'
import {createServer} from 'http'
import  * as io from 'socket.io'

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const server = createServer(app)
server.listen(port, () => console.log(`Server is running at ${port}........`))
app.get("/",(req,res) => res.send("Hurray! server is running..."))




const url = "localhost:27017";
mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



app.use("/users", userRouter);




const socketIo = new io.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});;


const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("MongoDB databse connected.");

    const changeStream = connection.collection('users').watch({ fullDocument: 'updateLookup' });

    changeStream.on('change', (change)=>{
        switch(change.operationType){
            case 'insert':
                const user = {
                    _id: change.fullDocument._id,
                    name: change.fullDocument.name,
                    dateAdded: change.fullDocument.dateAdded,
                    desc: change.fullDocument.desc,
                    phone: change.fullDocument.phone
                }
                socketIo.emit('user-added', user)
                break;

            case 'delete':
                socketIo.emit('user-deleted', change.documentKey._id)
                break;

            case 'update':
                const updatedUser = {
                    _id: change.fullDocument._id,
                    name: change.fullDocument.name,
                    dateAdded: change.fullDocument.dateAdded,
                    desc: change.fullDocument.desc,
                    phone: change.fullDocument.phone
                }
                socketIo.emit('user-updated',updatedUser)
                break;
        }
    })

})
