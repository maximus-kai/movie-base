import React from 'react'



function Card({picinfo , nameinfo , resultfromapi}) {
  console.log('the card function also ran')
    return (
      <div className="col-md-2">
      <div class="card shadow-sm">
          <img class="card-img-top" width="50px" height="200px" src={resultfromapi.Poster} alt="Card"/>
          <div class="card-body">
            <h4 class="card-title">{resultfromapi.Title}</h4>
            <p class="card-text">{resultfromapi.Type}</p>
            <p class="card-text">{resultfromapi.Year}</p>
            <a  class="btn btn-primary">See Review</a>
          </div>
    </div>
      </div>

      


)
}

export default Card;

{/* <figure className="card">

   <img src={resultfromapi.Poster} alt="" />

   <figcaption>{resultfromapi.Title}</figcaption>
   <div className= "figcaption2">{resultfromapi.Type}</div>
   <div className="figcaption3">{resultfromapi.Year}</div>
   

</figure> */}
