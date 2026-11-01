import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <img src="/assets/brillaris-logo.png" alt="Brillaris Global" />
      <h1>Page not found</h1>
      <p>The Brillaris Sentinel page you requested does not exist.</p>
      <Link className="primary-button" to="/login">Back to Login</Link>
    </main>
  );
}
