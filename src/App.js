import './App.css';
import MainDashboard from './components/MainDashboard.js/MainDashboard';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
        <div className='appGlass'>
         <Sidebar/>
         <MainDashboard/>
         <RightSide/>

        </div>
    </div>
  );
}

export default App;