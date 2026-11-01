import { AlertTriangle, Download, FolderKanban, ListChecks, Plus, Users } from 'lucide-react';
import { analytics, timeline } from '../../data/mockData.js';
import { ChartCircle, PageHeader, StatCard, Timeline } from '../../components/ui.jsx';

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin Dashboard"
        title="Executive Summary"
        description="Live operational oversight for Brillaris Sentinel monitoring operations."
        actions={<><button className="ghost-button"><Download size={16} /> Export</button><button className="primary-button"><Plus size={16} /> Create Project</button></>}
      />
      <section className="stats-grid">
        <StatCard icon={Users} label="Total Employees" value="24" progress={95} />
        <StatCard icon={FolderKanban} label="Projects" value="9" progress={92} tone="info" />
        <StatCard icon={ListChecks} label="Tasks" value="148" progress={84} />
        <StatCard icon={AlertTriangle} label="Open Issues" value="7" progress={22} tone="danger" />
      </section>
      <section className="section-grid two-column dashboard-detail-grid">
        <div className="dashboard-analytics">
          <div className="section-title"><div><h2>Monitoring Health</h2><p>Current progress across all active monitoring projects.</p></div><button className="ghost-button">Today</button></div>
          <div className="chart-grid">
            {analytics.map((item) => <ChartCircle key={item.label} label={item.label} value={item.value} />)}
          </div>
        </div>
        <div className="dashboard-activity">
          <div className="section-title"><h2>Today's Activity</h2><button className="text-link">View all</button></div>
          <Timeline items={timeline} />
        </div>
      </section>
    </>
  );
}
