import { Bell, Building2, KeyRound, ShieldCheck, UserRound } from 'lucide-react';
import { PageHeader } from '../../components/ui.jsx';

export default function AdminSettingsPage() {
  return (
    <>
      <PageHeader eyebrow="Settings" title="System Settings" description="Manage monitoring rules, workspace preferences, and access configuration." />
      <section className="settings-layout">
        <aside className="settings-nav">
          <button><UserRound size={17} /> Profile</button>
          <button><Building2 size={17} /> Workspace</button>
          <button className="active"><ShieldCheck size={17} /> Monitoring</button>
          <button><Bell size={17} /> Notifications</button>
          <button><KeyRound size={17} /> Access</button>
        </aside>
        <div className="settings-content">
          <section className="settings-panel">
            <div className="settings-panel-heading"><div><h2>Monitoring Windows</h2><p>Set the time in which employees can submit their checks.</p></div><button className="primary-button">Save changes</button></div>
            <div className="settings-fields"><label>Morning Check Window<input defaultValue="8:00 AM - 12:00 PM" /></label><label>Evening Check Window<input defaultValue="4:00 PM - 8:00 PM" /></label><label>Company Timezone<input defaultValue="Asia/Kolkata" /></label><label>Theme<select defaultValue="auto"><option value="auto">Automatic</option><option>Light</option><option>Dark</option></select></label></div>
          </section>
          <section className="settings-panel"><h2>Notification Preferences</h2><p>Choose which events need immediate administrator attention.</p><div className="setting-toggle"><div><strong>Missed check alerts</strong><span>Notify when a morning or evening check window closes without a submission.</span></div><input type="checkbox" defaultChecked /></div><div className="setting-toggle"><div><strong>API issue alerts</strong><span>Notify when an employee flags an API as slow, down, or unavailable.</span></div><input type="checkbox" defaultChecked /></div></section>
        </div>
      </section>
    </>
  );
}
