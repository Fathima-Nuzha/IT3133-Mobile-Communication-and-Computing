import React from 'react';
import { students } from "../data/StudentsDb";
import Gallery from "./Gallery";



function Body(props){
 
    return(
      
       <div style={{backgroundColor:'#f6f9fcff', height: '500px', padding: '0px'}}>
        <h1> <center>{props.content}</center>  </h1>
        <h1> <center>{props.title}</center>  </h1>
       <Gallery/>
   
        
       </div>
      
       

    )
}


  

export default Body
//im working on areact project now i want to create a table.
//i have a folder called components.Body footer header are some files .
//now give the next step to create the tables
