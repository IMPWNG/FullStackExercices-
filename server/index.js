import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

import { config } from "dotenv";
config({ path: config.env });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const API_URL = process.env.API_URL;

// GET API DATA WITH AXIOS
axios.get(API_URL)
    .then(response => {
        app.get("/", (req, res) => {
            res.send(response.data);
        });
    })
    .catch(error => {
        console.log(error);
    });

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

