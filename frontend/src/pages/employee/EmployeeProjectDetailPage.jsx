import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { projects, tasks as initialTasks } from '../../data/mockData.js';
import { EmployeeTaskCheckCard, PageHeader, Progress, Toolbar, getSessionState } from '../../components/ui.jsx';

export default function EmployeeProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId) || projects[0];
  
  const [activeSession, setActiveSession] = useState(null);
  const [taskData, setTaskData] = useState(() => 
    initialTasks.filter((task) => task.projectId === project.id)
  );

  const handleTaskCheck = (taskId, session) => {
    setTaskData((prev) => 
      prev.map(t => t.id === taskId ? { ...t, [session]: 'Completed' } : t)
    );
  };

  const handleSave = () => {
    alert(`Saved ${activeSession} checks successfully!`);
    setActiveSession(null);
  };

  const sortedTasks = useMemo(() => {
    if (!activeSession) return [];
    
    return [...taskData].sort((a, b) => {
      // 1. Immediate (Critical)
      const aImmediate = a.priority === 'Critical';
      const bImmediate = b.priority === 'Critical';
      if (aImmediate && !bImmediate) return -1;
      if (!aImmediate && bImmediate) return 1;

      // 2. Overdue (Missed time window)
      const aState = getSessionState(activeSession, a[activeSession]);
      const bState = getSessionState(activeSession, b[activeSession]);
      const aOverdue = aState.label === 'Missed';
      const bOverdue = bState.label === 'Missed';
      if (aOverdue && !bOverdue) return -1;
      if (!aOverdue && bOverdue) return 1;

      // 3. Normal (Pending vs Not Open vs Completed)
      // We push Completed to the bottom
      const aCompleted = aState.label === 'Completed';
      const bCompleted = bState.label === 'Completed';
      if (aCompleted && !bCompleted) return 1;
      if (!aCompleted && bCompleted) return -1;

      return 0;
    });
  }, [taskData, activeSession]);

  return (
    <>
      <PageHeader
        eyebrow="Project Page"
        title={project.name}
        description={activeSession 
          ? `${project.environment} project. Completing ${activeSession} checks.` 
          : `${project.environment} project assigned to Asmath. Select a time window.`}
        actions={
          activeSession && (
            <button className="primary-button" onClick={handleSave}>Save Checks</button>
          )
        }
      />

      {!activeSession && (
        <section className="project-summary">
          <Progress label="Morning Progress" value={project.morning} />
          <Progress label="Evening Progress" value={project.evening} />
          <Progress label="Project Health" value={project.health} />
        </section>
      )}

      {activeSession ? (
        <>
          <Toolbar placeholder="Search task">
            <button className="ghost-button" onClick={() => setActiveSession(null)}>Back to Sessions</button>
          </Toolbar>
          <section className="task-list">
            {sortedTasks.map((task) => (
              <EmployeeTaskCheckCard 
                key={task.id} 
                task={task} 
                activeSession={activeSession}
                onCheck={() => handleTaskCheck(task.id, activeSession)}
              />
            ))}
          </section>
        </>
      ) : (
        <section className="card-grid">
          <button 
            className="stat-card tone-info" 
            style={{ textAlign: 'left', border: '1px solid var(--line)', background: '#fff' }}
            onClick={() => setActiveSession('morning')}
          >
            <div>
              <p>Morning Routine</p>
              <strong>Start Morning Checks</strong>
            </div>
          </button>
          <button 
            className="stat-card tone-warning" 
            style={{ textAlign: 'left', border: '1px solid var(--line)', background: '#fff' }}
            onClick={() => setActiveSession('evening')}
          >
            <div>
              <p>Evening Routine</p>
              <strong>Start Evening Checks</strong>
            </div>
          </button>
        </section>
      )}
    </>
  );
}
