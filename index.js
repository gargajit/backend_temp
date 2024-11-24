import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

// Middleware to serve static files
app.use(express.static(__dirname + "/public"));

// Get Requests
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});
