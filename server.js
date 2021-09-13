import express from "express";
import bodyParser from "body-parser";
import  mongoose  from "mongoose";
import cors from "cors";
import postroute from "./routes/posts.js";
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extendend: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
}
//it must be below cors
app.use('/', postroute);


// const CONNECTION_URL = 'mongodb+srv://uddin786:uddin786@cluster0.gt755.mongodb.net/jsmastery?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;
const URI = 'mongodb+srv://uddin786:uddin786@cluster0.gt755.mongodb.net/jsmastery?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGOODB_URI || URI , { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => app.listen(PORT, () => console.log(`server is running on port:${ PORT }`)))

.catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify',false);
