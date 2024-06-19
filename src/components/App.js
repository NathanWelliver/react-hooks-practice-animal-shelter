import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChange(e){
    setFilters({type: e.target.value.toLowerCase()})
  }

  function findPets() {
    if(filters.type === "all"){
      fetch("http://localhost:3001/pets")
      .then(r => r.json())
      .then(data => setPets(data))
    } else if (filters.type === "cat"){
      fetch("http://localhost:3001/pets?type=cat")
      .then(r => r.json())
      .then(cats => setPets(cats))
    } else if (filters.type === "dog"){
      fetch("http://localhost:3001/pets?type=dog")
      .then(r => r.json())
      .then(dogs => setPets(dogs))
    } else if (filters.type === "micropig"){
      fetch("http://localhost:3001/pets?type=micropig")
      .then(r => r.json())
      .then(pigs => setPets(pigs))
    }
  }

  function onAdoptPet(petId) {
    
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChange} onFindPetsClick={findPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;