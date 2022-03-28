const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("dist"));

/* Ensure any requests prefixed with /static will serve our "frontend/static" directory */
// app.use("/assets", express.static(path.resolve(__dirname, "dist", "assets")));

/* Redirect all routes to our (soon to exist) "index.html" file */
// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve("dist", "input.html"));
// });

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
