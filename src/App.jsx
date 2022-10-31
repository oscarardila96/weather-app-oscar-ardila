import Card from '../components/Card'
import './App.css'
import skyDay from '../src/assets/skyDay.jpg'
import skyNight from '../src/assets/skyNight.jpg'
import useWeather from '../hooks/useWeather';

function App() {
  const { time } = useWeather();

  return (
    <div className="App" style={{ backgroundImage: (time < "18:00:00 PM" & time > "6:00:00 AM") ? `url(${skyDay})` : `url(${skyNight})`, color: (time < "18:00:00 PM" & time > "6:00:00 AM") ? `black` : `white` }}>
      <Card />
    </div>
  )
}

export default App
