import {createDepartment,updateFee,getFeeByStudent,createfeeforStudent,updateStudentSubjects,getTimeTable ,createFaculty, createStudent, createSubjects, createTimetable, deleteDepartment, deleteFaculty, deleteNotification, deleteStudent, deleteSubject, deleteTimetableEntry, getAllDepartments, getAllFaculty, getAllStudents, getAllSubjects, getNotifications, sendNotification, updateSubjectsOfFaculty, getFeesByStudent } from "../controllers/adminController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/isAdmin.js";
import express from "express";


const router = express.Router();

router.post('/create-student', authMiddleware, isAdmin, createStudent);
router.post('/create-faculty', authMiddleware, isAdmin, createFaculty);
router.post('/create-department', authMiddleware, isAdmin, createDepartment);
router.post('/create-subject', authMiddleware, isAdmin, createSubjects);
router.post('/create-timetable',authMiddleware,isAdmin,createTimetable);
router.post('/send-notification', authMiddleware, isAdmin, sendNotification);


router.put('/update-subjects/:id',authMiddleware,isAdmin, updateStudentSubjects);
router.put('/assign-subjects/:id', authMiddleware, isAdmin, updateSubjectsOfFaculty);

router.get('/get-students', authMiddleware, isAdmin, getAllStudents);
router.get('/get-faculty', authMiddleware, isAdmin, getAllFaculty);
router.get('/get-subjects', authMiddleware, isAdmin, getAllSubjects);
router.get('/get-departments', authMiddleware, isAdmin, getAllDepartments);
router.get('/get-notifications',getNotifications);
router.get('/timetable',getTimeTable);
router.delete('/delete-student/:id', authMiddleware, isAdmin, deleteStudent);
router.delete('/delete-faculty/:id', authMiddleware, isAdmin, deleteFaculty);
router.delete('/delete-subject/:id', authMiddleware, isAdmin, deleteSubject);
router.delete('/delete-department/:id', authMiddleware, isAdmin, deleteDepartment);
router.delete('/delete-notification/:id',authMiddleware, isAdmin ,deleteNotification);
router.delete('/delete-timetable/:id', authMiddleware, isAdmin, deleteTimetableEntry);

router.post('/create-fee', authMiddleware, isAdmin, createfeeforStudent); // Create fee for a student
router.get('/get-fees', authMiddleware, isAdmin, getFeesByStudent); // Get fees for a student 
router.get("/student-fee/:studentId", getFeeByStudent);
router.put("/update-fee/:studentId", updateFee);
export default router;

