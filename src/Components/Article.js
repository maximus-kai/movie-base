import React from 'react'

function Article({news}) {
    return (
        <div>
             <figure className="article">
  
                <img src={news.src} />

                <figcaption>

                    <h3>{news.head}</h3>

                    <p>
                       {news.detail}
                    </p>

                </figcaption>

            </figure>
        </div>
    )
}

export default Article





// <figure className="article">
  
// <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

// <figcaption>

//   <h3>Update</h3>

//   <p>

//     Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

//   </p>

// </figcaption>

// </figure>
