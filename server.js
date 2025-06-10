const express = require("express");
require("dotenv").config();
// const Maya= require("./maya.jpg")
const app = express();
const PORT = process.env.PORT;
const HOSTNAME = "127.0.0.1";




app.use(express.static("public"));


  app.get("/", (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Hello Bokdi</title>
        <style>
          body {
            background-image: url('/maya.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
            color: #fff;
            height: 100vh;
            margin: 0;
          }
          .overlay {
            background-color: rgba(0, 0, 0, 0.4); /* darkens the bg for better text contrast */
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .message {
            font-size: 28px;
            margin-bottom: 20px;
          }
          .emoji {
            font-size: 48px;
          }
        </style>
      </head>
      <body>
        <div class="overlay">
          <div class="message">
            👋 😀 Hello Bokdi, Bukku!<br/>
            💻 ✨ No need right now?
          </div>
          <div class="emoji">
            🐵🎀💻🦄✨
          </div>
        </div>
      </body>
    </html>
  `);
  });


app.listen(PORT, HOSTNAME, () => {
  console.log(`App is listening on http://${HOSTNAME}:${PORT}`);
});
