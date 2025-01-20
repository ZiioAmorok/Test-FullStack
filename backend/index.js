require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbConnect = require('./config/database.js');
const userRoutes = require('./routes/userRoutes.js');
const destinationsRoutes = require('./routes/destinationsRoutes.js');
const app = express();

app.use(express.json());


app.use(cors({
  origin: "http://localhost:5174",
  credentials: true, 
}));

app.use(cookieParser());
dbConnect()

app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationsRoutes);


const PORT = process.env.PORT ||3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});