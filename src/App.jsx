import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  let pokemon = "ditto"

  useEffect(() => {
    console.log("Use Effect")
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
     .then((res) => res.json())
     .then((data) => setPokemonData(data))
  }, [pokemon])

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
