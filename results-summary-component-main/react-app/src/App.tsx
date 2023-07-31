import './App.css';
import MainLayout from './components/Layout';
import ResultCard from './components/ResultCard';
import SummaryCard from './components/SummaryCard';

function App() {
  return (
    <MainLayout>
      <div className="shadow-box">
        <ResultCard />
        <SummaryCard />
      </div>
    </MainLayout>
  );
}

export default App;
