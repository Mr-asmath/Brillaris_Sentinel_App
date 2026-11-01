import { reports } from '../../data/mockData.js';
import { PageHeader, ReportCard, Toolbar } from '../../components/ui.jsx';

export default function AdminReportsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reports"
        title="Issue Reports"
        description="Review employee reports, expand details, and export operational records."
        actions={<button className="primary-button">Export PDF</button>}
      />
      <Toolbar placeholder="Search reports">
        <button className="ghost-button">Critical</button>
        <button className="ghost-button">Today</button>
        <button className="ghost-button">Unread</button>
      </Toolbar>
      <section className="stack">
        {reports.map((report) => <ReportCard key={report.id} report={report} />)}
      </section>
    </>
  );
}
