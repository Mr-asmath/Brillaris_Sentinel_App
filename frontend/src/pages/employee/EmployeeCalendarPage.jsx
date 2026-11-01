import { PageHeader } from '../../components/ui.jsx';

const days = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  const tone = day % 9 === 0 ? 'issue' : day % 5 === 0 ? 'pending' : 'complete';
  return { day, tone };
});

export default function EmployeeCalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Monthly Monitoring"
        description="Each day reflects your monitoring completion status."
      />
      <section className="calendar-grid">
        {days.map((day) => (
          <button key={day.day} className={`calendar-day ${day.tone}`}>
            <span>{day.day}</span>
          </button>
        ))}
      </section>
    </>
  );
}
