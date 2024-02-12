import http from "http"
import e from "express"
import cors from "cors"

const app = e();

app.use(cors());

app.use(e.json());

app.get("/", (req, res) => {
  const remoteAddress = req.connection.remoteAddress
  const url = req.url
  const host = req.headers.host
  const user_agent = req.headers["user-agent"]
  const response = `Received request from ${remoteAddress} GET ${url} Host: ${host} User-agent: ${user_agent} Accept: */*`
  console.log(response)
  res.status(200).send({
    response
  })
});

const server = http.createServer(app);

server.listen(80, () => {
  console.log("Server is running on port 80");
});
