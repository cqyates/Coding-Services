import Calendar from '../../components/Calendar';
import './style.css';
const Tutoring = () => {
  return (
    <main>
      <section id="content" style={{ border: '1px solid white' }}>
        <h4>Mern Stack Tutoring</h4>
        <ul>
          <li className="tech-list">HTML</li>
          <li className="tech-list">CSS</li>
          <li className="tech-list">Javascript</li>
          <li className="tech-list">RESTful APIs</li>
          <li className="tech-list">Node</li>
          <li className="tech-list">Express</li>
          <li className="tech-list">MySQL and Sequelize</li>
          <li className="tech-list">Models Views Controllers (MVC)</li>
          <li className="tech-list">Object Oriented Programming (OOP)</li>
          <li className="tech-list">Mongo and Mongoose</li>
          <li className="tech-list">GraphQL and Apollo Servers</li>
          <li className="tech-list">React</li>
        </ul>
      </section>
      <section id="calendar" style={{ border: '1px solid white' }}>
        <h4>My Calendar</h4>
        <Calendar />
      </section>
    </main>
  );
};
export default Tutoring;
