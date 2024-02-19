import './App.css';
import ParagraphText from './components/ParagraphText';
import AlertButton from './components/AlertButton';

function App() {
  return (
    <main>
      <ParagraphText />
      <AlertButton label='Baixar CV' />
    </main>
  );
}

export default App;
