import { analytics, projects } from '../../data/mockData.js';
import { ChartCircle, PageHeader, Progress } from '../../components/ui.jsx';

export default function AdminAnalyticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Analytics"
        title="Monitoring Intelligence"
        description="Daily completion, weekly trends, employee performance, API failures, and project health."
      />
      <section className="chart-grid">
        {analytics.map((item) => <ChartCircle key={item.label} label={item.label} value={item.value} />)}
      </section>
      <section className="detail-panel">
        <h2>Project Health</h2>
        {projects.map((project) => <Progress key={project.id} label={project.name} value={project.health} />)}
      </section>
    </>
  );
}
