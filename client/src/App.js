import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className="parent">
      <Header />
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
