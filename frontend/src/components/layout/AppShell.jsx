import {
  BarChart3,
  Bell,
  CalendarDays,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  UserCircle,
  Users,
} from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { currentDate } from '../../data/mockData.js';

const navIcons = {
  Dashboard: LayoutDashboard,
  Projects: FolderKanban,
  Tasks: ShieldCheck,
  Employees: Users,
  Reports: BarChart3,
  Messages: MessageSquare,
  Calendar: CalendarDays,
  Analytics: BarChart3,
  Settings,
  Profile: UserCircle,
};

export default function AppShell({ role, navItems, greeting }) {
  const location = useLocation();
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <img src="/assets/brillaris-logo.png" alt="Brillaris Global" />
          <div>
            <strong>Brillaris Sentinel</strong>
            <span>{role} workspace</span>
          </div>
        </div>
        <nav>
          {navItems.map((item) => {
            const Icon = navIcons[item.label] || LayoutDashboard;
            return (
              <NavLink key={item.to} to={item.to}>
                <Icon size={19} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
        <NavLink className="logout-link" to="/login">
          <LogOut size={18} />
          <span>Logout</span>
        </NavLink>
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <div>
            <p>{greeting}</p>
            <strong>{currentDate}</strong>
          </div>
          <label className="global-search">
            <Search size={17} />
            <input placeholder="Search projects, APIs, people..." />
          </label>
          <button className="icon-button" aria-label="Notifications">
            <Bell size={20} />
            <span />
          </button>
          <button className="profile-button">
            <UserCircle size={22} />
            <span>{role === 'Admin' ? 'Admin' : 'Asmath'}</span>
          </button>
        </header>
        <main className="page-surface" key={location.pathname}>
          <Outlet />
        </main>
      </div>

      <nav className="mobile-nav">
        {navItems.slice(0, 5).map((item) => {
          const Icon = navIcons[item.label] || LayoutDashboard;
          return (
            <NavLink key={item.to} to={item.to} aria-label={item.label}>
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
