import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout.jsx';
import EmployeeLayout from './components/layout/EmployeeLayout.jsx';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage.jsx';
import AdminCalendarPage from './pages/admin/AdminCalendarPage.jsx';
import AdminDashboardPage from './pages/admin/AdminDashboardPage.jsx';
import AdminEmployeesPage from './pages/admin/AdminEmployeesPage.jsx';
import AdminMessagesPage from './pages/admin/AdminMessagesPage.jsx';
import AdminProjectDetailPage from './pages/admin/AdminProjectDetailPage.jsx';
import AdminProjectsPage from './pages/admin/AdminProjectsPage.jsx';
import AdminReportsPage from './pages/admin/AdminReportsPage.jsx';
import AdminSettingsPage from './pages/admin/AdminSettingsPage.jsx';
import AdminTasksPage from './pages/admin/AdminTasksPage.jsx';
import EmployeeCalendarPage from './pages/employee/EmployeeCalendarPage.jsx';
import EmployeeDashboardPage from './pages/employee/EmployeeDashboardPage.jsx';
import EmployeeMessagesPage from './pages/employee/EmployeeMessagesPage.jsx';
import EmployeeProfilePage from './pages/employee/EmployeeProfilePage.jsx';
import EmployeeProjectDetailPage from './pages/employee/EmployeeProjectDetailPage.jsx';
import EmployeeProjectsPage from './pages/employee/EmployeeProjectsPage.jsx';
import LoginPage from './pages/public/LoginPage.jsx';
import NotFoundPage from './pages/public/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/employee" element={<EmployeeLayout />}>
        <Route index element={<Navigate to="/employee/dashboard" replace />} />
        <Route path="dashboard" element={<EmployeeDashboardPage />} />
        <Route path="projects" element={<EmployeeProjectsPage />} />
        <Route path="projects/:projectId" element={<EmployeeProjectDetailPage />} />
        <Route path="messages" element={<EmployeeMessagesPage />} />
        <Route path="calendar" element={<EmployeeCalendarPage />} />
        <Route path="profile" element={<EmployeeProfilePage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="projects" element={<AdminProjectsPage />} />
        <Route path="projects/:projectId" element={<AdminProjectDetailPage />} />
        <Route path="tasks" element={<AdminTasksPage />} />
        <Route path="employees" element={<AdminEmployeesPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
        <Route path="messages" element={<AdminMessagesPage />} />
        <Route path="calendar" element={<AdminCalendarPage />} />
        <Route path="analytics" element={<AdminAnalyticsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
