import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { employees, projects, reports, tasks } from '../../data/mockData.js';
import { PageHeader, Progress, ReportCard, StatusChip, TaskCard } from '../../components/ui.jsx';

const tabs = ['Overview', 'Tasks', 'Employees', 'Reports', 'History', 'Settings'];

export default function AdminProjectDetailPage() {
  const { projectId } = useParams();
  const [active, setActive] = useState('Overview');
  const project = projects.find((item) => item.id === projectId) || projects[0];

  return (
    <>
      <PageHeader
        eyebrow="Project Details"
        title={project.name}
        description="Manage project monitoring from one tabbed workspace."
      />
      <nav className="tabs">
        {tabs.map((tab) => (
          <button key={tab} className={active === tab ? 'active' : ''} onClick={() => setActive(tab)}>{tab}</button>
        ))}
      </nav>
      {active === 'Overview' && (
        <section className="project-summary">
          <Progress label="Morning Completion" value={project.morning} />
          <Progress label="Evening Completion" value={project.evening} />
          <Progress label="Health Score" value={project.health} />
        </section>
      )}
      {active === 'Tasks' && (
        <section className="task-list">
          {tasks.map((task) => <TaskCard key={task.id} task={task} compact />)}
        </section>
      )}
      {active === 'Employees' && (
        <section className="card-grid three">
          {employees.map((employee) => (
            <article className="employee-card" key={employee.id}>
              <div className="avatar">{employee.name[0]}</div>
              <h3>{employee.name}</h3>
              <p>{employee.department}</p>
              <StatusChip value={employee.status} />
            </article>
          ))}
        </section>
      )}
      {active === 'Reports' && <section className="stack">{reports.map((report) => <ReportCard key={report.id} report={report} />)}</section>}
      {active === 'History' && <section className="detail-panel"><h2>Daily History</h2><p>Morning and evening monitoring records are stored by date, employee, task, and session.</p></section>}
      {active === 'Settings' && <section className="detail-panel form-panel"><label>Morning Window<input defaultValue="8:00 AM - 12:00 PM" /></label><label>Evening Window<input defaultValue="4:00 PM - 8:00 PM" /></label><button className="primary-button">Save Settings</button></section>}
    </>
  );
}
