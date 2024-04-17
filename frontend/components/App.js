import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

function App() {
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    // Fetch data from the planets API
    axios.get('http://localhost:9009/api/planets')
      .then(res => {
        setPlanets(res.data)
      })
      .catch(err => {
        console.error('Error fetching planets data:', err.message)
      })

    // Fetch data from the people API
    axios.get('http://localhost:9009/api/people')
      .then(res => {

        // Replace homeworld id by the corresponding planet name
        const peopleWithHomeworld = res.data.map(person => ({
          ...person,
          homeworld: planets.find(planet => planet.id === person.homeworld)?.name
        }))
        setPeople(peopleWithHomeworld)
      })
      .catch(err => {
        console.error('Error fetching people data:', err.message)
      })
  }, [planets])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>I have read the README and completed the challenge</p>
      {people.map(person => (
        <Character key={person.name} person={person} />
      ))}
    </div>
  )

}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
