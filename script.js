const express = require("express");

const testRouter = require("./routers/testRouters")

const app = express();

app.use(testRouter)

// app.use(auth.authenticationMiddleware);

// app.get("/all", (req, res) => {
//   console.log(req.user);
//   res.status(200).json({ hello: "world" });
// });

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`App up and running on http://localhost:${port}`);
});
