import { Plus } from 'lucide-react';
import { projects } from '../../data/mockData.js';
import { PageHeader, ProjectCard, Toolbar } from '../../components/ui.jsx';

export default function AdminProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        description="Open an existing project workspace in a structured project-management format."
        actions={<button className="primary-button"><Plus size={17} /> Create Project</button>}
      />
      <Toolbar placeholder="Search projects">
        <button className="ghost-button">Production</button>
        <button className="ghost-button">Staging</button>
        <button className="ghost-button">Today</button>
      </Toolbar>
      <div className="section-title">
        <h2>Project Directory</h2>
        <span className="muted-label">{projects.length} projects</span>
      </div>
      <section className="card-grid three">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} to={`/admin/projects/${project.id}`} />
        ))}
      </section>
    </>
  );
}
