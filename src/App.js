import React, {useState, useEffect} from "react";
//import logo from './logo.svg';
import "./style.css";
//import './App.css';
import Header from "./Header"
import LivreCard from "./LivreCard"
import livreData from "./livres.json"
import otherImgPath from './images/commandes/image2.jpg'
//import allImages from "./images/commandes/*.jpg"
//import allImgPath from "./img/*.jpg"

//import conanImgPath from './images/commandes/image1.jpg'
//import conanImgPath from './img/image1.jpg'
//import aphexTwinImgPath from './img/image2.jpg'


function App() {

  //console.log(allImages);

  const [livres, setLivres] = useState([]);
  //console.log(livreData)

 useEffect(() => {
  fetch('livres.json')
  .then(response => response.json())
  .then(data => {
    
    setLivres(data);

  })
 }, [])

  const allLivres = livres.map(livre =>
    <LivreCard key={livre.id} livre={livre} />
  );

  console.log(livres);
  return (
    
    <div>
      <Header /> 
    
      <div className="app">
           
        <h1>Books</h1>
        <div className="card-list">
          {allLivres}
       </div>
      
           
      </div>

    </div>
  );
}

export default App;
