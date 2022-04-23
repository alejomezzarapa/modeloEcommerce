import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  const styles = {
    title: 'ml-8 mt-6 text-3xl font-bold text-blue-800' 
  }

  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
  );
}

export default App;
