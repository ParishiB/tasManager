const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.ndmzc7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
app.use("/auth", require("./routes/Auth"));
app.use("/task", require("./routes/Task"));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
