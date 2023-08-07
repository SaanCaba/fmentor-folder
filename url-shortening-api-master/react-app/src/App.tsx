import './App.css';
import Boost from './components/Boost';
import GetStarted from './components/GetStarted';
import Layout from './components/Layout';
import LinkShortener from './components/LinkShortener';
import NavBar from './components/NavBar';
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <GetStarted />
        <LinkShortener />
        <Statistics />
        <Boost />
      </main>
    </>
  );
}

export default App;
