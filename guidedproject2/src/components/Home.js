import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3002/api/characters`)
      .then((res) => {
        setCharacters(res.data);
      })
  }, [])
  console.log(characters)
  return (
    <section style={characterListStyle}>

      {characters.map((characterObj) => {
        return <div style={characterListDivStyle}>{characterObj.name}</div>
      })}

    </section>

  );
}

const characterListStyle = {
  'display': 'flex',
  'flex-wrap': 'wrap',
  'justify-content': 'space-around',
  'padding': 0
}

const characterListDivStyle = {
  'padding': '10px',
  'margin': '10px',
  'border': '1px solid darkblue',
  'border-radius': '5px',
  'color':'darkblue',
  'background-color': 'lightblue',
  'font-weight': 'bold'
}


export default Home;