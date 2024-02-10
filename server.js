import http from "http";
import e from "express";

const app = e();

app.use(e.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = http.createServer(app);

server.listen(69420, () => {
  console.log("Server is running on port 3000");
});
