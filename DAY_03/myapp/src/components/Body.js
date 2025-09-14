import React from 'react';
import Table from './Table';

function Body(props){
 
    return(
      
       <div style={{backgroundColor:'#E2EAF4', height: '500px', padding: '250px'}}>
        <h1> <center>{props.content}</center>  </h1>
        <h1> <center>{props.title}</center>  </h1>
        <h3><center>Student data table</center></h3>
        <Table/>
        
       </div>
      
       

    )
}


  

export default Body
//im working on areact project now i want to create a table.
//i have a folder called components.Body footer header are some files .
//now give the next step to create the tables
