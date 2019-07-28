const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

//connects with database
connectDB();

//middleware
//get data in req.body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));
app.use("/api/albums", require("./routes/api/albums"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
