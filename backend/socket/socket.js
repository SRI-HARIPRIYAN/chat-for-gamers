import {Server} from 'socket.io';
import http from 'http';
import express from 'express'

const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:['GET','POST']
    }
});

const userSocketMap = {}; //{userId: socketId}

export const getReceiverSocketid=(receiverId) =>{
    return userSocketMap[receiverId];
}

io.on("connection",(socket)=>{
    console.log('a new user connection', socket.id)

    const userId = socket.handshake.query.userId;
    if(userId !== "undefined") userSocketMap[userId] = socket.id;

    

    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
    //socket.on() is used to listen to events. used in client and in server
    socket.on("disconnect",()=>{
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
        console.log('user disconnected',socket.id)
    })
})

export {app,io,server}