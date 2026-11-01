import { AlertTriangle, CheckCircle2, Clock3, FolderKanban, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/mockData.js';
import { PageHeader, ProjectCard, StatCard } from '../../components/ui.jsx';

export default function EmployeeDashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Employee Dashboard"
        title="Today's Monitoring"
        description="Open an assigned project to complete morning and evening monitoring checks."
      />
      <section className="stats-grid">
        <StatCard icon={FolderKanban} label="Projects" value="3" progress={100} />
        <StatCard icon={ListChecks} label="Today's Tasks" value="36" progress={62} tone="info" />
        <StatCard icon={CheckCircle2} label="Completed" value="24" progress={67} />
        <StatCard icon={Clock3} label="Pending" value="10" progress={28} tone="warning" />
        <StatCard icon={AlertTriangle} label="Issues" value="2" progress={18} tone="danger" />
      </section>
      <section>
        <div className="section-title">
          <h2>Assigned Projects</h2>
          <Link to="/employee/projects">View all</Link>
        </div>
        <div className="card-grid three">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} to={`/employee/projects/${project.id}`} />
          ))}
        </div>
      </section>
    </>
  );
}
