import './App.css';
import Card from './components/Card/Card';
import Carts from './components/Carts/carts';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="max-w-screen-xl mx-auto flex gap-10">
        <div className="w-2/3">
          <Card></Card>
        </div>
        <div className="w-1/3">
          <Carts></Carts>
        </div>
      </div>
    </div>
  );
}

export default App;
