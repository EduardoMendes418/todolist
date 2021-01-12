import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import logoImg from '../src/assets/ifoodComunica.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

/*################### LandingPage  ################ */
function App() {
  return (
    <div id="page-landing">
        <div id="page-landing-content" >
            <div className="logo-container">
                <img src={logoImg} alt="ifood" />
            </div>
            <div className='todo-app'>
                <TodoList />
            </div>
        </div>
    </div>
  );
}

export default App;
