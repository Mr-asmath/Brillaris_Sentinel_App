import { Bell, Moon, UserCircle } from 'lucide-react';
import { PageHeader, StatCard } from '../../components/ui.jsx';

export default function EmployeeProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="Asmath"
        description="Manage profile preferences, theme, notifications, and monitoring settings."
      />
      <section className="stats-grid">
        <StatCard icon={UserCircle} label="Assigned Projects" value="3" progress={100} />
        <StatCard icon={Bell} label="Notifications" value="12" progress={60} tone="warning" />
        <StatCard icon={Moon} label="Theme" value="Auto" progress={100} tone="info" />
      </section>
      <section className="detail-panel form-panel">
        <label>Name<input defaultValue="Asmath" /></label>
        <label>Email<input defaultValue="asmath@brillaris.pro" /></label>
        <label>Department<input defaultValue="Monitoring" /></label>
        <button className="primary-button">Save Preferences</button>
      </section>
    </>
  );
}
