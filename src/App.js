import { useState } from "react";
import "./styles.css";


var genres = {     // database of emojis, also called a dictionary (object)
  "Action": 
  [{
  name: 'Mission Impossible', 
  description: 'Mission: Impossible is a series of American action spy films based on and a follow-on from the television series of the same name created by Bruce Geller.', 
  rating: '9.5 / 10'
  }, 

  {
  name: 'Gladiator', 
  description:'Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.', 
  rating: '8.5 / 10'
  }, 

  {
  name: 'Star Wars', 
  description: 'Star Wars is an American epic space-opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.', 
  rating: '9 / 10'
  }],


  "Thriller": 
  [{
  name: 'Shutter Island', 
  description: 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.', 
  rating: '8.2 / 10'
  }, 

  {
  name:'Inception', 
  description: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.", 
  rating: '8.8 / 10'
  }, 

  {
  name: 'Tenet', 
  description: 'When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world.', 
  rating: '7.3 / 10'
  }],


  "Horror": 
  [{
  name:'Exorcist', 
  description: 'Regan, a young girl, displays bizarre behaviour after playing with a Ouija board. Chris, her mother and an actress, consults two priests who conclude that Regan is possessed by a demonic entity.', 
  rating: '8.1 / 10'
  }, 

  {
  name:'The Conjuring', 
  description: 'The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them.', 
  rating: '7.5 / 10'
  }, 
  
  {
  name: 'A Quiet Place', 
  description: 'A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.', 
  rating: '7.4 / 10'
  }]
};


var myList = Object.keys(genres);  

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");

	function genreClickHandler(genre) {
		setGenre(genre);
	}

  return (
    <div className="App">
      <h2>🎬 My Movies</h2>
      <p style= {{fontSize:"larger"}}>
          Checkout my favorite movies. Select a genre to get started!
      </p>
      <div>
      {
				myList.map((genre) => <button className="button"
				onClick = {() => genreClickHandler(genre)}
        style = {{
          fontSize: "1rem", 
          padding: "0.5rem", 
          cursor: "pointer", 
          margin: "1rem 0.5rem", 
          borderRadius: "0.3rem", 
          border: "2px solid black"}} 

        key={genre}> {genre} </button>) 
      }
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
            { 
              genres[selectedGenre].map((book) => (
              <li 
              key={book.name} 
              style= {{
                listStyle: "none", 
                border: "1px solid #52525b", 
                margin: "1rem 0rem", 
                padding: "1rem", 
                borderRadius: "0.5rem", 
                boxShadow: "0.1rem 0.2rem grey"}}> 

              <div style={{fontSize: "larger", fontWeight:'600', marginBottom: "0.5rem"}}>{book.name}</div>
              <div style={{fontSize: "medium"}}>{book.description}</div>
              <div style={{fontSize: "medium", margin: '0.4rem 0rem 0rem'}}><span>⭐ </span>{book.rating}</div>
              </li> 
                  )
               )
            }
        </ul>
      </div>

    </div>
  );
}
