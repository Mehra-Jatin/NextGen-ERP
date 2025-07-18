import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
// Student Pages
import StudentDashboard from "./Pages/StudentDashboard.jsx";
import { MyCourses } from "./Pages/MyCourses.jsx";
import { MyAttendance } from "./Pages/MyAttendance.jsx";
import ProfilePage from "./Pages/StudentProfiePage.jsx";
import MyAttendanceHistory from "./Pages/MyAttendanceHistory.jsx";
import MyGrades from "./Pages/MyGrades.jsx";
import StudentFees from "./Pages/StudentFees.jsx";

// Admin Pages
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import ManageStudents from "./Pages/ManageStudents.jsx";
import ManageSubjects from "./Pages/ManageSubjects.jsx";
import ManageFaculty from "./Pages/ManageFaculty.jsx";
import ManageDepartment from "./Pages/Managedepartment.jsx";
import ManageTimeTable from "./Pages/ManageTimeTable.jsx";
import ManageNotices from "./Pages/ManageNotices.jsx";
import ManageFees from "./Pages/ManageFees.jsx";

// Faculty Pages
import FacultyDashboard from "./Pages/FacultyDashboard.jsx";
import FacultyProfile from "./Pages/FacultyProfile.jsx";
import FacultyCourses from "./Pages/FacultyCourses.jsx";
import FacultyAttendance from "./Pages/FacultyAttendance.jsx";
import FacultyGrades from "./Pages/FacultyGrades.jsx";
import FacultyTimeTable from "./Pages/FacultyTimeTable.jsx";

// Shared Pages
import SignInPage from "./Pages/SignInPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Sidebars
import StudentSidebar from "./components/StudentSidebar.jsx";
import AdminSidebar from "./components/AdminSidebar.jsx";
import FacultySidebar from "./components/FacultySidebar.jsx";
import useAuthStore from "./store/authStore.js";

function App() {
  const { checkAuth, userrole, isCheckingAuth, isAuthenticated } =
    useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !userrole && isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route
            path="/sign-in"
            element={
              userrole === null ? (
                <SignInPage />
              ) : userrole === "Student" ? (
                <Navigate to="/dashboard" replace />
              ) : userrole === "Faculty" ? (
                <Navigate to="/faculty/my-courses" replace />
              ) : userrole === "Admin" ? (
                <Navigate to="/admin/dashboard" replace />
              ) : (
                <Navigate to="/" replace /> // fallback (optional)
              )
            }
          />

          {/* Student Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fees"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <StudentFees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-courses"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <MyCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-attendance"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <MyAttendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance-history/:id"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <MyAttendanceHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-grades"
            element={
              <ProtectedRoute role="Student">
                <StudentSidebar />
                <MyGrades />
              </ProtectedRoute>
            }
          />
          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/faculty"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageFaculty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/students"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageStudents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/departments"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageDepartment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/courses"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageSubjects />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/fees"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageFees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/timetable"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageTimeTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/notices"
            element={
              <ProtectedRoute role="Admin">
                <AdminSidebar />
                <ManageNotices />
              </ProtectedRoute>
            }
          />
          {/* Faculty Routes */}
          <Route
            path="/faculty/profile"
            element={
              <ProtectedRoute role="Faculty">
                <FacultySidebar />
                <FacultyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty/my-courses"
            element={
              <ProtectedRoute role="Faculty">
                <FacultySidebar />
                <FacultyCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty/my-attendance"
            element={
              <ProtectedRoute role="Faculty">
                <FacultySidebar />
                <FacultyAttendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty/grades"
            element={
              <ProtectedRoute role="Faculty">
                <FacultySidebar />
                <FacultyGrades />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty/timetable"
            element={
              <ProtectedRoute role="Faculty">
                <FacultySidebar />
                <FacultyTimeTable />
              </ProtectedRoute>
            }
          />

          {/* Unauthorized Route */}
          <Route
            path="/unauthorized"
            element={<h1>403 - Unauthorized Access</h1>}
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
