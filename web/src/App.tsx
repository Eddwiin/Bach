import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet />
    </div>
  );
}


export default App;