const express = require("express");
const app = express();
const home = require("./routes/home");

app.get("/", home);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
