import './App.css';
import GreetingCard from './component/GreetingCard/GreetingCard';
import HelloWorld from './component/HelloWorld/HelloWorld';
import Counter from './component/Counter/Counter';

function App() {


  return (
    <div className="App">
      <HelloWorld />
      <GreetingCard name="farnaz"/>
      <Counter />
    </div>
  );
}

export default App;
