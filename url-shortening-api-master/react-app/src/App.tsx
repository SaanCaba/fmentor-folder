import './App.css';
import GetStarted from './components/GetStarted';
import Layout from './components/Layout';
import NavBar from './components/NavBar';

function App() {
  return (
    <Layout>
      <NavBar />
      <main>
        <GetStarted />
      </main>
    </Layout>
  );
}

export default App;
