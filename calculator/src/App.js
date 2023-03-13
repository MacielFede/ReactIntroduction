import "./App.css"
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import Button from './components/Button.jsx'

function App() {
  return (
    <main>
      <section className= 'freecodecamp-logo'>
        <img src={freeCodeCampLogo} alt='freeCodeCamp logo'/>
      </section>
      <section className='mainContainer'>
        <div className='rows' >
          <Button>1</Button>
        </div>
        <div className='rows' ></div>
        <div className='rows' ></div>
        <div className='rows' ></div>
        <div className='rows' ></div>
      </section>
    </main>
  );
}

export default App;
