import Calendar from '../../components/Calendar';
import './style.css';
const Tutoring = () => {
  return (
    <main>
      <section id="content" style={{ border: '1px solid white' }}>
        <h4>Description of Services</h4>
      </section>
      <section id="calendar" style={{ border: '1px solid white' }}>
        <h4>My Calendar</h4>
        <Calendar />
      </section>
    </main>
  );
};
export default Tutoring;