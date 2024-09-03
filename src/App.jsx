import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Patrimoine from './PatrimoinePage';
import PossessionList from './PossessionList';
import CreatePossession from './CreatePossessionPage';
import UpdatePossession from './UpdatePossessionPage';
import PatrimoineRangePage from './PatrimoineRangePage';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/patrimoine" element={<Patrimoine />} />
          <Route path="/possession" element={<PossessionList />} />
          <Route path="/possession/create" element={<CreatePossession />} />
          <Route path="/possession/:libelle/update" element={<UpdatePossession />} />
          <Route path="/patrimoine/range" element={<PatrimoineRangePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
