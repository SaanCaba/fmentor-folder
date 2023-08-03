import './App.css';
import GetStarted from './components/GetStarted';
import Layout from './components/Layout';
import LinkShortener from './components/LinkShortener';
import NavBar from './components/NavBar';
import Statistics from './components/Statistics';

function App() {
  return (
    <Layout>
      <NavBar />
      <main>
        <GetStarted />
        <LinkShortener />
        <Statistics />
      </main>
    </Layout>
  );
}

export default App;
