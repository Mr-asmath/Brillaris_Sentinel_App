import { tasks } from '../../data/mockData.js';
import { PageHeader, TaskCard, Toolbar } from '../../components/ui.jsx';

export default function AdminTasksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tasks"
        title="Global Monitoring Tasks"
        description="Filter by project, priority, session, employee, and API status."
      />
      <Toolbar placeholder="Search APIs or tasks">
        <button className="ghost-button">Critical</button>
        <button className="ghost-button">Missed</button>
        <button className="ghost-button">Down</button>
      </Toolbar>
      <section className="task-list">
        {tasks.map((task) => <TaskCard key={task.id} task={task} compact />)}
      </section>
    </>
  );
}
