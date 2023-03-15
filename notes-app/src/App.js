import './App.css';
import logo from './assets/freecodecamp-logo - copia.png'
import NotesLists from './components/NotesLists';

function App() {
  return (
    <main>
      <section className='freeCodeCamp-logo'>
        <img  src={logo} />
      </section>
      <section className='main-container'>
        <h1>My notes</h1>

        <NotesLists />
      </section>
    </main>
  );
}

export default App;
