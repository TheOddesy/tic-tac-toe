
import './App.css';
import Game from './components/Game'

function App() {
  return (
    <>
      <div className="big-circle-1"></div>
      <div className="moon"></div>
      <div className="triangle"></div>
      <div className="info"><a href="https://theoddesy.github.io/HomePage/" target="_blank" rel="noopener noreferrer" >Who made this?</a></div>
      
      <Game />
    </>
  );
}

export default App;
