import React, { useState } from 'react'

function Character({ person }) {
  const [showHomeworld, setShowHomeworld] = useState(false)

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{person.name}</h3>
      {showHomeworld && person.homeworld && (
        <div>
          <p>Planet: <span className="character-planet">{person.homeworld}</span></p>
        </div>
      )}
    </div>
  )
}

export default Character
