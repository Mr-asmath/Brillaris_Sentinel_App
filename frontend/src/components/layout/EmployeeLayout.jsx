import AppShell from './AppShell.jsx';

const navItems = [
  { label: 'Dashboard', to: '/employee/dashboard' },
  { label: 'Projects', to: '/employee/projects' },
  { label: 'Messages', to: '/employee/messages' },
  { label: 'Calendar', to: '/employee/calendar' },
  { label: 'Profile', to: '/employee/profile' },
];

export default function EmployeeLayout() {
  return <AppShell role="Employee" navItems={navItems} greeting="Good Morning Asmath" />;
}
