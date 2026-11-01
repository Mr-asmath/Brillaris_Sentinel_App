import { useState } from 'react';
import { AlertTriangle, BarChart3, CheckCircle2, Clock3, Info, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const toneIcons = {
  success: CheckCircle2,
  warning: Clock3,
  danger: AlertTriangle,
  info: Info,
};

export function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <header className="page-header">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </header>
  );
}

export function StatCard({ icon: Icon, label, value, progress, tone = 'success' }) {
  return (
    <article className={`stat-card tone-${tone}`}>
      <div className="stat-icon">{Icon && <Icon size={20} />}</div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
      {progress !== undefined && (
        <div className="progress-track">
          <span style={{ width: `${progress}%` }} />
        </div>
      )}
    </article>
  );
}

export function StatusChip({ value }) {
  const normalized = String(value).toLowerCase().replace(/\s+/g, '-');
  return <span className={`status-chip status-${normalized}`}>{value}</span>;
}

export function PriorityChip({ value }) {
  return <span className={`priority-chip priority-${String(value).toLowerCase()}`}>{value}</span>;
}

export function Toolbar({ placeholder = 'Search', children }) {
  return (
    <div className="toolbar">
      <label className="search-box">
        <Search size={18} />
        <input placeholder={placeholder} />
      </label>
      <div className="toolbar-actions">{children}</div>
    </div>
  );
}

export function ProjectCard({ project, to }) {
  return (
    <article className="project-card project-card-atlassian">
      <div className="project-card-header">
        <div className="project-icon">{project.key?.slice(0, 2) || project.name.slice(0, 2)}</div>
        <div>
          <h3>{project.name}</h3>
          <p>{project.key} · {project.type}</p>
        </div>
      </div>
      <div className="project-meta-list">
        <span><strong>Environment</strong>{project.environment}</span>
        <span><strong>Lead</strong>{project.lead}</span>
        <span><strong>Last check</strong>{project.lastCheck}</span>
      </div>
      <div className="card-metrics">
        <span>{project.tasks} APIs</span>
        <span>{project.employees} people</span>
        <StatusChip value={project.issues ? `${project.issues} Issues` : 'Healthy'} />
      </div>
      <Progress label="Morning" value={project.morning} />
      <Progress label="Evening" value={project.evening} />
      <div className="project-card-footer">
        <span>{project.health}% health</span>
        <Link className="text-link" to={to}>Open project</Link>
      </div>
    </article>
  );
}

export function ProjectTemplateCard({ template }) {
  const icons = {
    shield: ShieldCheck,
    alert: AlertTriangle,
    chart: BarChart3,
    check: CheckCircle2,
  };
  const Icon = icons[template.icon] || ShieldCheck;

  return (
    <article className="template-card">
      <div className="template-icon">
        <Icon size={22} />
      </div>
      <div>
        <p className="eyebrow">{template.category}</p>
        <h3>{template.name}</h3>
        <p>{template.description}</p>
      </div>
      <div className="template-task-list">
        {template.tasks.map((task) => (
          <span key={task}>{task}</span>
        ))}
      </div>
      <button className="ghost-button" type="button">Use template</button>
    </article>
  );
}

export function Progress({ label, value }) {
  return (
    <div className="progress-item">
      <div>
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function TaskCard({ task, compact = false }) {
  const tone = task.status === 'Down' ? 'danger' : task.status === 'Slow' || task.morning === 'Pending' ? 'warning' : 'success';
  return (
    <article className={`task-card border-${tone}`}>
      <div className="card-row">
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
        <PriorityChip value={task.priority} />
      </div>
      <div className="task-controls">
        <label>
          Status
          <select defaultValue={task.status}>
            <option>Working</option>
            <option>Slow</option>
            <option>Partially Working</option>
            <option>Server Paused</option>
            <option>Authentication Error</option>
            <option>Timeout</option>
            <option>Incorrect Response</option>
            <option>Down</option>
          </select>
        </label>
        <SessionPill label="Morning" value={task.morning} />
        <SessionPill label="Evening" value={task.evening} />
      </div>
      {!compact && (
        <label className="report-box">
          Report
          <textarea defaultValue={task.report} placeholder="Write task report..." />
        </label>
      )}
      <button className="primary-button">Save Check</button>
    </article>
  );
}

const sessionWindows = {
  morning: { start: 8, end: 12, opens: '8:00 AM', closes: '12:00 PM' },
  evening: { start: 16, end: 20, opens: '4:00 PM', closes: '8:00 PM' },
};

function getCompanyHour() {
  return Number(
    new Intl.DateTimeFormat('en-IN', {
      hour: 'numeric',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    }).format(new Date()),
  );
}

export function getSessionState(session, value) {
  const normalized = String(value).toLowerCase();
  const hour = getCompanyHour();
  const window = sessionWindows[session];

  if (normalized === 'completed' || normalized === 'missed') {
    return { label: value, enabled: false, helper: normalized === 'completed' ? 'Already checked' : 'Window closed' };
  }

  if (hour < window.start) {
    return { label: 'Not Open', enabled: false, helper: `Opens ${window.opens}` };
  }

  if (hour >= window.end) {
    return { label: 'Missed', enabled: false, helper: `Closed ${window.closes}` };
  }

  return { label: 'Pending', enabled: true, helper: 'Available now' };
}

export function EmployeeTaskCheckCard({ task, activeSession, onCheck }) {
  const sessionValue = task[activeSession];
  const state = getSessionState(activeSession, sessionValue);
  
  let bgClass = 'bg-task-normal';
  if (state.label === 'Completed') bgClass = 'bg-task-completed';
  else if (task.priority === 'Critical') bgClass = 'bg-task-immediate';
  else if (state.label === 'Missed') bgClass = 'bg-task-overdue';

  const tone = task.status === 'Down' ? 'danger' : task.status === 'Slow' || state.label === 'Pending' ? 'warning' : 'success';

  return (
    <article className={`employee-check-card border-${tone} ${bgClass}`}>
      <div className="employee-task-main">
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
        <div className="inline-chips">
          <StatusChip value={task.status} />
          <PriorityChip value={task.priority} />
        </div>
      </div>
      <div className="session-check-grid" style={{ gridTemplateColumns: 'minmax(200px, 400px)' }}>
        <SessionCheckButton
          label={activeSession === 'morning' ? 'Morning Check' : 'Evening Check'}
          state={state}
          onClick={onCheck}
        />
      </div>
    </article>
  );
}

function SessionCheckButton({ label, state, onClick }) {
  const isComplete = state.label === 'Completed';
  const icon = isComplete || state.enabled ? <CheckCircle2 size={18} /> : <Clock3 size={18} />;

  return (
    <div className="session-check">
      <div>
        <span>{label}</span>
        <small>{state.helper}</small>
      </div>
      <button
        className={`tick-button status-${String(state.label).toLowerCase().replace(/\s+/g, '-')}`}
        type="button"
        disabled={!state.enabled}
        onClick={onClick}
      >
        {icon}
        {state.enabled ? 'Check' : state.label}
      </button>
    </div>
  );
}

export function SessionPill({ label, value }) {
  return (
    <div className="session-pill">
      <span>{label}</span>
      <StatusChip value={value} />
    </div>
  );
}

export function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => {
        const Icon = toneIcons[item.tone] || Info;
        return (
          <div className={`timeline-item tone-${item.tone}`} key={`${item.time}-${item.detail}`}>
            <span>{item.time}</span>
            <Icon size={18} />
            <div>
              <strong>{item.person}</strong>
              <p>{item.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ChartCircle({ label, value }) {
  return (
    <article className="chart-card">
      <div className="circle-chart" style={{ '--value': `${value * 3.6}deg` }}>
        <span>{value}%</span>
      </div>
      <h3>{label}</h3>
    </article>
  );
}

export function ReportCard({ report }) {
  return (
    <article className="report-card">
      <div>
        <p className="eyebrow">{report.time}</p>
        <h3>{report.task}</h3>
        <p>{report.issue}</p>
      </div>
      <div>
        <StatusChip value={report.severity} />
        <p>{report.employee}</p>
      </div>
    </article>
  );
}
