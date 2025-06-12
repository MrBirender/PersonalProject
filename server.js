const app = require("./app.js");
require("dotenv").config();

const PORT = process.env.PORT;
const HOSTNAME = "127.0.0.1";


app.listen(PORT, HOSTNAME, () => {
  console.log(`App is listening on http://${HOSTNAME}:${PORT}`);
});
