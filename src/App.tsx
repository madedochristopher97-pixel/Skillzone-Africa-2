/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CoursePlayer from './pages/CoursePlayer';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import InstructorOnboarding from './pages/InstructorOnboarding';
import ApplicationSubmitted from './pages/ApplicationSubmitted';
import CareerPathDetails from './pages/CareerPathDetails';
import InstructorDashboard from './pages/InstructorDashboard';
import InstructorDashboardOverview from './pages/instructor/InstructorDashboardOverview';
import InstructorCourses from './pages/instructor/InstructorCourses';
import InstructorUploads from './pages/instructor/InstructorUploads';
import InstructorEarnings from './pages/instructor/InstructorEarnings';
import InstructorStudents from './pages/instructor/InstructorStudents';
import InstructorSettings from './pages/instructor/InstructorSettings';
import CourseBuilder from './pages/instructor/CourseBuilder';
import CoursePublishedSuccess from './pages/instructor/CoursePublishedSuccess';
import Onboarding from './pages/Onboarding';

// Learner Dashboard imports
import LearnerDashboard from './pages/learner/LearnerDashboard';
import LearnerDashboardOverview from './pages/learner/LearnerDashboardOverview';
import LearnerCourses from './pages/learner/LearnerCourses';
import LearnerCertificates from './pages/learner/LearnerCertificates';
import LearnerExplore from './pages/learner/LearnerExplore';
import LearnerProfile from './pages/learner/LearnerProfile';
import LearnerSettings from './pages/learner/LearnerSettings';

function ProtectedRoute({ children, role }: { children: React.ReactNode, role?: 'learner' | 'instructor' }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ returnTo: location.pathname, message: "Please sign in to access your dashboard" }} replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = 
    location.pathname === '/instructor-onboarding' || 
    location.pathname === '/application-submitted' || 
    location.pathname === '/course-published-success' ||
    location.pathname === '/onboarding' ||
    location.pathname.startsWith('/instructor-dashboard') ||
    location.pathname.startsWith('/learner-dashboard');

  const hideFooter = hideNavAndFooter || location.pathname.endsWith('/checkout') || location.pathname.endsWith('/learn');

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/courses/:courseId/learn" element={
            <ProtectedRoute>
              <CoursePlayer />
            </ProtectedRoute>
          } />
          <Route path="/courses/:courseId/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path="/auth" element={<Auth />} />
          <Route path="/instructor-onboarding" element={<InstructorOnboarding />} />
          <Route path="/application-submitted" element={<ApplicationSubmitted />} />
          <Route path="/course-published-success" element={<CoursePublishedSuccess />} />
          <Route path="/career-paths/:id" element={<CareerPathDetails />} />
          
          <Route path="/instructor-dashboard" element={
            <ProtectedRoute role="instructor">
              <InstructorDashboard />
            </ProtectedRoute>
          }>
            <Route index element={<InstructorDashboardOverview />} />
            <Route path="courses" element={<InstructorCourses />} />
            <Route path="uploads" element={<InstructorUploads />} />
            <Route path="earnings" element={<InstructorEarnings />} />
            <Route path="students" element={<InstructorStudents />} />
            <Route path="settings" element={<InstructorSettings />} />
            <Route path="course-builder" element={<CourseBuilder />} />
          </Route>

          <Route path="/learner-dashboard" element={
            <ProtectedRoute>
              <LearnerDashboard />
            </ProtectedRoute>
          }>
            <Route index element={<LearnerDashboardOverview />} />
            <Route path="courses" element={<LearnerCourses />} />
            <Route path="certificates" element={<LearnerCertificates />} />
            <Route path="explore" element={<LearnerExplore />} />
            <Route path="profile" element={<LearnerProfile />} />
            <Route path="settings" element={<LearnerSettings />} />
          </Route>
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
