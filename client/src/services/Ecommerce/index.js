import Calendar from '../../components/Calendar';
import './style.css';
const Ecommerce = () => {
  return (
    <main>
      <section id="content" style={{ border: '1px solid white' }}>
        <h4>Ecommerce Consultations</h4>
      </section>
      <section id="calendar" style={{ border: '1px solid white' }}>
        <h4>My Calendar</h4>
        <Calendar />
      </section>
    </main>
  );
};
export default Ecommerce;
