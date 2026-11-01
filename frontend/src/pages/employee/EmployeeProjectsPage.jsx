import { projects } from '../../data/mockData.js';
import { PageHeader, ProjectCard, Toolbar } from '../../components/ui.jsx';

export default function EmployeeProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Assigned Project Monitoring"
        description="Open an assigned project workspace to complete morning and evening API checks."
      />
      <Toolbar placeholder="Search assigned projects">
        <button className="ghost-button">Today</button>
        <button className="ghost-button">Pending</button>
      </Toolbar>
      <section className="card-grid three">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} to={`/employee/projects/${project.id}`} />
        ))}
      </section>
    </>
  );
}
