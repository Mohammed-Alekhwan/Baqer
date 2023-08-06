const express = require('express')
const Course =require('models/CoursesModel')
const router = express.Router()

const {
    createCourse, getCourse, getCourses, deleteCourse, updateCourse
} = require('../controllers/courseControllers')

// Get all workouts
router.get('/',getCourses)

// get single workout
router.get('/:id', getCourse)

// post a new workout
router.post('/:id',(req ,res) => {
    const {img,title,description} =req.body
    
    res.json({mssh:"post a new course"})
})

// delete a workout
router.delete('/:id', deleteCourse)

// update a workout
router.patch('/:id', updateCourse)

module.exports = router
