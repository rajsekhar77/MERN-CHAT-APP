import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receirverId) => {
  return userSocketMap[receirverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("a user connected Id : ", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
    console.log(`User with ID: ${userId} connected with socket ID: ${socket.id}`);
  }

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on("disconnect", () => {
    console.log("a user disconnected userId : ", socket.id);

    // // Find the userId associated with the disconnected socket.id
    // const userId = Object.keys(userSocketMap).find(key => userSocketMap[key] === socket.id);

    // // Remove the user from the map if userId is found
    // if (userId !== undefined) {
    //   delete userSocketMap[userId];
    //   console.log(`User with ID: ${userId} removed from userSocketMap.`);
    // }

    delete userSocketMap[userId];
    
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });   
});

export { app, io, server };
