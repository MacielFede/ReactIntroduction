import './App.css';
import Review from './components/Review'

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Review 
        name='Emma Bostian'
        country='Suecia'
        position='Ingeniera de software'
        company='Spotify'
        review=''
        image='emma'
      />
    </div>
  );
}

export default App;
