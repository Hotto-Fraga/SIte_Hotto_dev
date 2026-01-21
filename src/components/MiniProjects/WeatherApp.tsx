"use client"

import { useState } from 'react'
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi'

export default function WeatherApp() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState<any>(null)

  const mockWeatherData: any = {
    'lisboa': { temp: 18, condition: 'sunny', humidity: 65, wind: 12 },
    'porto': { temp: 15, condition: 'cloudy', humidity: 75, wind: 18 },
    'london': { temp: 10, condition: 'rainy', humidity: 85, wind: 22 },
    'paris': { temp: 12, condition: 'cloudy', humidity: 70, wind: 15 },
    'tokyo': { temp: 8, condition: 'snow', humidity: 60, wind: 10 },
  }

  const handleSearch = () => {
    const cityLower = city.toLowerCase()
    if (mockWeatherData[cityLower]) {
      setWeather({ city: city, ...mockWeatherData[cityLower] })
    } else {
      setWeather({ city: city, temp: Math.floor(Math.random() * 30), condition: 'sunny', humidity: 50, wind: 10 })
    }
  }

  const getWeatherIcon = (condition: string) => {
    const iconClass = "text-6xl"
    switch (condition) {
      case 'sunny': return <WiDaySunny className={`${iconClass} text-yellow-400`} />
      case 'cloudy': return <WiCloudy className={`${iconClass} text-gray-400`} />
      case 'rainy': return <WiRain className={`${iconClass} text-orange-400`} />
      case 'snow': return <WiSnow className={`${iconClass} text-cyan-300`} />
      case 'storm': return <WiThunderstorm className={`${iconClass} text-purple-400`} />
      default: return <WiDaySunny className={`${iconClass} text-yellow-400`} />
    }
  }

  return (
    <div className="bg-gradient-to-br from-orange-400 to-red-600 dark:from-orange-700 dark:to-red-900 rounded-2xl p-6 shadow-xl min-h-[400px]">
      <h3 className="text-2xl font-bold text-white mb-4">Weather App</h3>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-white mb-2">{weather.city}</h4>
            <div className="flex justify-center mb-4">
              {getWeatherIcon(weather.condition)}
            </div>
            <div className="text-5xl font-bold text-white mb-4">{weather.temp}°C</div>
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <div className="text-sm opacity-80">Humidity</div>
                <div className="text-xl font-semibold">{weather.humidity}%</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Wind</div>
                <div className="text-xl font-semibold">{weather.wind} km/h</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
