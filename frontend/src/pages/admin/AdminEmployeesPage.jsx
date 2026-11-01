import { MoreVertical, Plus } from 'lucide-react';
import { employees } from '../../data/mockData.js';
import { PageHeader, StatusChip, Toolbar } from '../../components/ui.jsx';

export default function AdminEmployeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Employees"
        title="Team Management"
        description="Manage access, active monitoring assignments, and operational coverage."
        actions={<button className="primary-button"><Plus size={17} /> Invite member</button>}
      />
      <section className="team-stats">
        <div><span>Total personnel</span><strong>24</strong><small>+2 this month</small></div>
        <div><span>Active sessions</span><strong>18</strong><small>/ 24 online</small></div>
        <div><span>Open assignments</span><strong>36</strong><small>across 9 projects</small></div>
      </section>
      <Toolbar placeholder="Search team members">
        <button className="ghost-button">Filters</button>
        <button className="ghost-button">Export CSV</button>
      </Toolbar>
      <section className="team-panel">
        <div className="team-panel-heading"><h2>Sentinel Operators</h2><span>{employees.length} shown</span></div>
        <div className="team-table" role="table">
          <div className="team-row team-row-head" role="row"><span>Member</span><span>Department</span><span>Status</span><span>Assignments</span><span>Actions</span></div>
          {employees.map((employee) => (
            <div className="team-row" role="row" key={employee.id}>
              <div className="team-member"><div className="avatar">{employee.name[0]}</div><div><strong>{employee.name}</strong><small>{employee.name.toLowerCase().replace(/\s/g, '.')}@brillaris.com</small></div></div>
              <span>{employee.department}</span>
              <StatusChip value={employee.status} />
              <span>{employee.projects} projects</span>
              <button className="row-icon-button" aria-label={`More actions for ${employee.name}`}><MoreVertical size={18} /></button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
