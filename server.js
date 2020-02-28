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

