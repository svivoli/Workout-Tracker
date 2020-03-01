const Workout = require('../models/workout');

module.exports = function (app) {
    app.post('/api/workouts', (req, res) => {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put('/api/workouts/:id', ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get('/api/workouts', (req, res) => {
        Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get('/api/workouts/range', (req, res) => {
        Workout.find({})
        .limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.delete('/api/workouts', ({ body }, res) => {
        Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true)
        })
        .catch(err => {
            res.json(err);
        });
    });
};

