export const currentDate = '13 July 2026';

export const projects = [
  {
    id: 'safereach',
    name: 'SafeReach',
    key: 'SAFE',
    type: 'API Monitoring',
    lead: 'Asmath',
    environment: 'Production',
    tasks: 12,
    employees: 4,
    morning: 83,
    evening: 32,
    health: 92,
    issues: 2,
    lastCheck: '9:10 AM',
  },
  {
    id: 'edupulse',
    name: 'EduPulse',
    key: 'EDU',
    type: 'Release Monitoring',
    lead: 'Employee A',
    environment: 'Staging',
    tasks: 8,
    employees: 3,
    morning: 75,
    evening: 0,
    health: 88,
    issues: 1,
    lastCheck: '8:44 AM',
  },
  {
    id: 'paybridge',
    name: 'PayBridge',
    key: 'PAY',
    type: 'Incident Watch',
    lead: 'Employee B',
    environment: 'Production',
    tasks: 16,
    employees: 6,
    morning: 68,
    evening: 0,
    health: 74,
    issues: 4,
    lastCheck: '8:20 AM',
  },
];

export const projectTemplates = [
  {
    id: 'api-monitoring',
    name: 'API Monitoring',
    description: 'Morning and evening checklist for production APIs, service health, and employee verification.',
    category: 'Operations',
    tasks: ['Login API', 'Payment API', 'Notification API', 'Database Health'],
    icon: 'shield',
  },
  {
    id: 'incident-response',
    name: 'Incident Response',
    description: 'Track critical failures, owners, reports, escalation status, and resolution history.',
    category: 'Reliability',
    tasks: ['Detect issue', 'Assign owner', 'Record status', 'Close incident'],
    icon: 'alert',
  },
  {
    id: 'uptime-review',
    name: 'Uptime Review',
    description: 'Daily project health review with API uptime, failure count, missed checks, and trends.',
    category: 'Analytics',
    tasks: ['Check uptime', 'Review failures', 'Compare health', 'Export report'],
    icon: 'chart',
  },
  {
    id: 'qa-checklist',
    name: 'QA Checklist',
    description: 'Structured release validation for staging and production endpoints before handoff.',
    category: 'Quality',
    tasks: ['Verify endpoint', 'Check expected response', 'Log issue', 'Approve release'],
    icon: 'check',
  },
];

export const tasks = [
  {
    id: 'login-api',
    projectId: 'safereach',
    name: 'Login API',
    description: 'Verify employee login endpoint with valid credentials and expected session response.',
    status: 'Working',
    priority: 'Critical',
    owner: 'Asmath',
    morning: 'Completed',
    evening: 'Pending',
    report: 'No issue found in morning check.',
  },
  {
    id: 'payment-api',
    projectId: 'safereach',
    name: 'Payment API',
    description: 'Confirm payment initialization, callback response, and timeout behavior.',
    status: 'Down',
    priority: 'Critical',
    owner: 'Employee B',
    morning: 'Missed',
    evening: 'Pending',
    report: 'Payment gateway timed out during verification.',
  },
  {
    id: 'notification-api',
    projectId: 'safereach',
    name: 'Notification API',
    description: 'Check outbound email, SMS trigger, and push notification queue.',
    status: 'Slow',
    priority: 'High',
    owner: 'Employee C',
    morning: 'Completed',
    evening: 'Not Open',
    report: 'Email queue responds slowly but completes.',
  },
  {
    id: 'database-health',
    projectId: 'safereach',
    name: 'Database Connection',
    description: 'Confirm database status endpoint and read/write health indicator.',
    status: 'Working',
    priority: 'High',
    owner: 'Asmath',
    morning: 'Pending',
    evening: 'Not Open',
    report: '',
  },
];

export const employees = [
  { id: 1, name: 'Asmath', department: 'Monitoring', projects: 4, status: 'Online', completion: 95 },
  { id: 2, name: 'Employee A', department: 'Operations', projects: 3, status: 'Online', completion: 88 },
  { id: 3, name: 'Employee B', department: 'Support', projects: 5, status: 'Away', completion: 72 },
  { id: 4, name: 'Employee C', department: 'QA', projects: 2, status: 'Offline', completion: 91 },
];

export const reports = [
  { id: 1, employee: 'Employee B', task: 'Payment API', time: '8:20 AM', severity: 'Critical', issue: 'Payment API down during morning check.' },
  { id: 2, employee: 'Employee C', task: 'Notification API', time: '9:10 AM', severity: 'Warning', issue: 'Notification queue is slow but eventually sends.' },
  { id: 3, employee: 'Asmath', task: 'Login API', time: '8:05 AM', severity: 'Normal', issue: 'Morning verification completed successfully.' },
];

export const timeline = [
  { time: '8:05', person: 'Asmath', detail: 'Checked Login API', tone: 'success' },
  { time: '8:20', person: 'Employee B', detail: 'Payment API Down', tone: 'danger' },
  { time: '9:10', person: 'Employee C', detail: 'Completed Notification API', tone: 'warning' },
  { time: '9:35', person: 'Admin', detail: 'Assigned EduPulse to Employee A', tone: 'info' },
];

export const messages = [
  { sender: 'Admin', body: 'Please prioritize critical production APIs before 9:30 AM.', time: '8:00 AM' },
  { sender: 'Asmath', body: 'Login API is working. Payment API needs admin review.', time: '8:24 AM' },
  { sender: 'Admin', body: 'Noted. Keep the report attached to the task card.', time: '8:26 AM' },
];

export const analytics = [
  { label: 'Projects', value: 92 },
  { label: 'Employees', value: 95 },
  { label: "Today's Completion", value: 84 },
  { label: 'API Uptime', value: 89 },
];
