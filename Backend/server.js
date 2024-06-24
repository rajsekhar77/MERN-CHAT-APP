import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";

import connectToMongoDB from "./DB/connecToMongo.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the incoming cookies from req.cookies
 
// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, '/fronted/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'fronted', 'dist', 'index.html'))
})

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is listening on port ${PORT}`);
});
