import { ArrowRight, LockKeyhole, Mail, ShieldCheck, UserRoundCheck } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@brillaris.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  const credentials = {
    admin: { email: 'admin@brillaris.com', password: 'admin123', route: '/admin/dashboard' },
    employee: { email: 'employee@brillaris.com', password: 'employee123', route: '/employee/dashboard' },
  };

  function handleSubmit(event) {
    event.preventDefault();
    const match = Object.values(credentials).find((item) => item.email === email && item.password === password);

    if (!match) {
      setError('Use the admin or employee demo credentials shown below.');
      return;
    }

    setError('');
    navigate(match.route);
  }

  function useCredential(role) {
    setEmail(credentials[role].email);
    setPassword(credentials[role].password);
    setError('');
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-brand">
          <img src="/assets/brillaris-logo.png" alt="Brillaris Global" />
          <div>
            <strong>Brillaris Sentinel</strong>
            <span>API monitoring workspace</span>
          </div>
        </div>
        <div className="login-intro">
          <p className="eyebrow">Secure access</p>
          <h1>Sign in to Sentinel</h1>
          <p>Use your assigned Brillaris monitoring account.</p>
        </div>
        <span className="field-label">Email address</span>
        <label>
          <Mail size={18} />
          <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <span className="field-label">Password</span>
        <label>
          <LockKeyhole size={18} />
          <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        {error && <p className="login-error">{error}</p>}
        <button className="login-button" type="submit">Login to Sentinel <ArrowRight size={18} /></button>
        <div className="credential-grid" aria-label="Demo credentials">
          <button type="button" className="credential-card" onClick={() => useCredential('admin')}>
            <ShieldCheck size={19} />
            <span>Admin</span>
            <strong>admin@brillaris.com</strong>
            <small>Password: admin123</small>
          </button>
          <button type="button" className="credential-card" onClick={() => useCredential('employee')}>
            <UserRoundCheck size={19} />
            <span>Employee</span>
            <strong>employee@brillaris.com</strong>
            <small>Password: employee123</small>
          </button>
        </div>
        <Link className="secondary-login" to="/employee/dashboard">Open employee workspace</Link>
        <footer>Brillaris Global | educate | innovate | elevate</footer>
      </form>
    </main>
  );
}
