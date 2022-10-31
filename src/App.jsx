import Card from '../components/Card'
import './App.css'
import skyDay from '../src/assets/skyDay.jpg'
import skyNight from '../src/assets/skyNight.jpg'
import useWeather from '../hooks/useWeather';

function App() {
  const { time } = useWeather();

  return (
    <div className="App">
      <Card />
    </div>
  )
}

export default App
