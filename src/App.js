import './App.css';
import MainDashboard from './components/MainDashboard.js/MainDashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
        <div className='appGlass'>
         <Sidebar/>
         <MainDashboard/>

        </div>
    </div>
  );
}

export default App;