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

//<img src="/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_0006298811&amp;isbn=9781623563776&amp;author=Crawford%2C+Anwen+auteur&amp;title=Live+through+this&amp;year=2015&amp;TypeOfDocument=Physical&amp;mat=BOOK&amp;ct=true&amp;size=512&amp;isPhysical=1" style="position: absolute; inset: 0px; margin: auto; max-width: 100%; max-height: 100%;"></img>



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
