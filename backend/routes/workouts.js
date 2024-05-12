const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')



const router = express.Router()


//require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/',getWorkouts)

//GET a single workouts
router.get('/:id',getWorkout)

//POST A NEW WORKOUT
router.post('/',createWorkout)

//DELETE A WORKOUT
router.delete('/:id',deleteWorkout)

//UPDATE A WORKOUT
router.patch('/:id',updateWorkout)

module.exports=router