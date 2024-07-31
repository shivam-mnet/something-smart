import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import Context from './Components/Context';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Context />} />
          <Route path="/context" element={<Context />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;