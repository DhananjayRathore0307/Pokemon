import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [number, setNumber] = useState('');

  const show = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${number}`;
    axios.get(URL)
      .then((response) => {
        setData(response.data);
        setName(response.data.name);
        setWeight(response.data.weight);
      })
      .catch((err) => {
        alert("Pokémon not found");
      });
  };

  return (
    <div className='container'>
    <div className='App1'>
      <h1 className='title'>Pokemon Card Generator</h1>
      <h3 className='id'>Enter ID between 1-999</h3>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter Pokémon ID "
      />
      <button onClick={show}>Show</button>

      {data && (
        <>
          <h2 className='name'>Name: {name}</h2>
          <h3 className='weight'>Weight: {weight}</h3>
          <img className='img1'
            src={data.sprites.other.dream_world.front_default}
            alt={name}
          />
          <p className='abilities'>My abilities are:</p>
          {data.abilities.map((value, key) => (
            <div key={key}>{value.ability.name}</div>
          ))}
        </>
      )}
    </div>
    </div>
  );
}

export default App;
