import { FileText, Link2, Phone, Search, Users } from 'lucide-react';
import { messages, projects } from '../../data/mockData.js';

export default function EmployeeMessagesPage() {
  return (
    <section className="message-workspace">
      <aside className="conversation-list">
        <div className="conversation-heading"><div><p className="eyebrow">Messages</p><h1>Conversations</h1></div><span>2 new</span></div>
        <div className="conversation-filters"><button className="active">All</button><button>Admin</button><button>Projects</button></div>
        <div className="conversation-items">
          {projects.map((project, index) => (
            <button key={project.id} className={`conversation-item ${index === 0 ? 'active' : ''}`}>
              <span className="conversation-avatar">{project.key?.slice(0, 2)}</span>
              <span><strong>{project.name}</strong><small>{index === 0 ? 'Admin: Please prioritize critical APIs...' : `Monitoring updates for ${project.name}`}</small></span>
              {index === 0 && <i />}
            </button>
          ))}
        </div>
      </aside>
      <div className="conversation-thread">
        <header className="thread-heading"><div><h2>SafeReach Monitoring</h2><p><i /> 4 active project members</p></div><div><button className="row-icon-button" aria-label="Search conversation"><Search size={18} /></button><button className="row-icon-button" aria-label="Call project team"><Phone size={18} /></button></div></header>
        <div className="thread-content">
          <span className="thread-date">Today, 13 July</span>
          {messages.map((message) => (
            <article key={`${message.sender}-${message.time}`} className={message.sender === 'Admin' ? 'admin-msg' : 'employee-msg'}>
              <strong>{message.sender}</strong>
              <p>{message.body}</p>
              <span>{message.time}</span>
            </article>
          ))}
        </div>
        <label className="composer"><input placeholder="Type a message..." /><button className="primary-button">Send</button></label>
      </div>
      <aside className="conversation-details">
        <div className="details-project-mark">SR</div><h2>SafeReach</h2><p>Production monitoring</p>
        <button><FileText size={18} /> Shared files <span>2</span></button>
        <button><Link2 size={18} /> Links <span>4</span></button>
        <button><Users size={18} /> Members <span>4</span></button>
        <div className="details-note"><p className="eyebrow">Monitoring status</p><strong>2 API issues need review</strong><span>Payment API is down. Notification API response is slow.</span></div>
      </aside>
    </section>
  );
}
