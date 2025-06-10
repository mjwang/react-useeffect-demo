import { useState } from 'react'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState(null)


  return (
    <div className="App">
      <header><h2>API Data</h2></header>
      <div className="api-data">
        {JSON.stringify(pokemonData)}
      </div>
    </div>
  )
}

export default App
