// "About Me" page 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Showoff from './pages/Showoff';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Header /> {/* 상단 헤더 컴포넌트 */}
      <div className="main-content mt-20">
        <Routes>
          <Route exact path="/showoff" component={Showoff} />
          <Route exact path="/projects" component={Projects} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
