const Course = require('../models/course.model');

const courseController = {
    getAll: async (req, res) => {
        try {
            const courses = await Course.find();
            res.send(courses);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const course = await Course.findById(id);
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.send(course);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    create: async (req, res) => {
        const { name, code } = req.body;
        try {
            const course = new Course({ name, code });
            await course.save();
            res.json({ message: `Course saved with id ${course.id}!` });
        } catch (err) {
            res.status(400).send('Cannot create course: ' + err.message);
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { name, code } = req.body;
        try {
            const updatedCourse = await Course.findByIdAndUpdate(
                id,
                { name, code },
                { new: true, runValidators: true }
            );
            if (!updatedCourse) {
                return res.status(404).send('Course not found');
            }
            res.json({ message: 'Course updated successfully', course: updatedCourse });
        } catch (err) {
            res.status(500).send('Cannot update course: ' + err.message);
        }
    },

    deleteCourse: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedCourse = await Course.findByIdAndDelete(id);
            if (!deletedCourse) {
                return res.status(404).send('Course not found');
            }
            res.json({ message: `Course deleted successfully`, course: deletedCourse });
        } catch (err) {
            res.status(500).send('Cannot delete course: ' + err.message);
        }
    }
};

module.exports = courseController;