const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")

const bookRoute = require("./route/book.route.js");
const userRoute = require("./route/user.route.js");

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8080;
const URL = process.env.MongoDBURL;

// Connect to mongoDB
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(URL);
}

// defining routes 
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
