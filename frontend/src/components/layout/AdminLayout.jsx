import AppShell from './AppShell.jsx';

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard' },
  { label: 'Projects', to: '/admin/projects' },
  { label: 'Tasks', to: '/admin/tasks' },
  { label: 'Employees', to: '/admin/employees' },
  { label: 'Reports', to: '/admin/reports' },
  { label: 'Messages', to: '/admin/messages' },
  { label: 'Calendar', to: '/admin/calendar' },
  { label: 'Analytics', to: '/admin/analytics' },
  { label: 'Settings', to: '/admin/settings' },
];

export default function AdminLayout() {
  return <AppShell role="Admin" navItems={navItems} greeting="Welcome Admin" />;
}
