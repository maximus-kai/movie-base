import React from 'react';
import Card from "./Card";



function cardList({cardimage , roboticname ,resultfromapi}) {
    console.log("the cardlist function ran")
    return (
        <div  className="row">
        {
            resultfromapi.map((result , index)=>{
                return  <Card resultfromapi = {resultfromapi[index]}/>
            })
        }


       


       
        </div>
    )
}

export default cardList;
