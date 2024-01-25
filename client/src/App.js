import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className="parent-container">
     <Header className='item item-1'/>
      <main className="item item-2">
       <Outlet/>
      </main>
      <div className="item item-3">this is the column for the footer</div>
    </div>
  );
}

export default App;
