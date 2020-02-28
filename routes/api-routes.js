const Workout = require('../models/workout');

module.exports = function (app) {
    app.post('/api/workouts', (req, res) => {
        console.log(body);
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};

