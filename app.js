const express = require('express');
const mongojs = require('mongojs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const databaseURL = "workout-tracker";
const collections = "workouts";

const db = mongojs(databaseURL, collections);

db.on("error", error => {
    console.log("Database Error: ", error);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/exercise.html'));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/stats.html'));
});

app.listen(8080, () => {
    console.log("App running on port 8080");
});