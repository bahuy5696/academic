import './App.css';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Faculty from 'pages/Faculty';
import Home from 'pages/Home';
import Institution from 'pages/Institution';
import Venue from 'pages/Venue';
import Concept from 'pages/Concept';
import {
  ROUTE_CONCEPT,
  ROUTE_FACULTY,
  ROUTE_HOME,
  ROUTE_INSTITUTION,
  ROUTE_VENUE,
} from './constants/routes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="flex h-full">
        <Sidebar />
        <div className="w-3/4">
          <Routes>
            <Route path={ROUTE_HOME} element={<Home />} />
            <Route path={ROUTE_FACULTY} element={<Faculty />} />
            <Route path={ROUTE_INSTITUTION} element={<Institution />} />
            <Route path={ROUTE_VENUE} element={<Venue />} />
            <Route path={ROUTE_CONCEPT} element={<Concept />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
