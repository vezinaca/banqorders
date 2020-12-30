import React from "react";
import conanImgPath from './images/commandes/image1.jpg'
//import allImages from './images/commandes/*.jpg'
import holeImg from './images/commandes/image2.jpg';
// import allImages from './images/commandes/*';
// console.log('allImages', allImages);

// from https://stackoverflow.com/a/53762705
// and https://stackoverflow.com/a/53777657
function importAll(r) {
  let out = {};
  r.keys().forEach(k => {
    out[k] = r(k).default;
  });
  return out;
}
const images = importAll(require.context('./images/commandes/', false, /\.(png|jpe?g|svg)$/));

export default function LivreCard({livre}){

    /*"date_ordered": "2020-01-30 16:03:50",
        "id": 1,
        "image_name": "images/commandes/Hole's_Live_Through_This_(33_1_3).jpg",
        "isbn": "9781623563776",
        "last_checked": "2020-05-27 17:46:16",
        "nb_emails_sent": 0,
        "received": 1,
        "title": "Hole's Live Through This (33 1/3)",
        "type_document": "Printed Books"
    */

    const date_checked = new Date(livre.last_checked);
    const date_ordered = new Date(livre.date_ordered);

    console.log("Date Object received day: ", date_ordered);
    console.log("Date object checked day: ", date_checked);

    const date_checked_day = date_checked.getDate();
    const date_ordered_day = date_ordered.getDate();

    console.log("just date received day: ", date_ordered_day);
    console.log("just date checked day: ", date_checked_day);

    const diffTemps = Math.abs(date_checked - date_ordered);
    const diffJours = Math.ceil(diffTemps / (1000 * 60 * 60 * 24)); 
    //console.log(diffTemps + " jours");
    //console.log(diffJours + " days");

    /*
    const date1 = new Date('7/13/2010');
    const date2 = new Date('12/15/2010');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    */

    //const inlineStyle = livre.received === "1" ? {background-color: 'green'} : {background-color: 'red'}
    
   
    //const difference = date_checked - date_received;
    //console.log(difference.toDateString());
    //console.log(mydate.toDateString());
    //const attente = difference.toDateString();
    //const attente = livre.last_checked - livre.date_ordered;
    //console.log(attente);
    return(
        
        <div className="card" style={livre.received ? {backgroundColor : 'lightgreen'}: {backgroundColor : '#ffcccb'}}>
            <img className="card--image" src={images['./' + livre.image_name]} alt="" /> 
            {/*<img className="card--image" src={livre.image_name} alt="problem" />*/}
            
            <h2 className="card--title">{livre.title}</h2>
            <p>Author: {livre.author}</p>
            <p>ISBN: {livre.isbn}</p>
            <p>Date ordered: {livre.date_ordered}</p>
            <p>Date when book appeared in BANQ system: {livre.last_checked}</p>
            <p style={{color: "red"}}> {diffJours} days</p>
            <p style={{color: "red"}}> {diffJours/30} months</p>
            <p>
                <label>Received</label>
                <input 
                    type="checkbox"
                    checked={livre.received}
                    readOnly="readOnly"
                    
                />
            </p>
            <p></p>
            
            
            

        </div>
    )
}