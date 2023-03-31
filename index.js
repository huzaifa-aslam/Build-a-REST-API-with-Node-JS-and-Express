import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.get("/api/v1/users", (req, res) => {
  res.status(200).json([
    { id: 1, name: "ali" },
    { id: 2, name: "hassan" },
  ]);
});
app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
